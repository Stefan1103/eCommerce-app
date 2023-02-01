//assets
import logoIcon from '../../assets/f-icon.png';

//react
import React from 'react';
import { useState, useEffect } from 'react';

//fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

//bootstrap
import Dropdown from 'react-bootstrap/Dropdown';

//redux
import { fetchProductsSearch, fetchProductsCategory } from '../../redux/actions/products';
import { useSelector, useDispatch } from 'react-redux';

//reac-router-dom
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
	const [ searchName, setSearchName ] = useState('');
	const [ pickedCategory, setPickedCategory ] = useState('');
	const [ dimension, setDimension ] = useState(window.innerWidth);

	const dispatch = useDispatch();
	const cat = useSelector((state) => state.categories);
	const cart = useSelector((state) => state.cart);
	const numberOfItemsInCart = cart.cartItems.length;
	const categories = cat.categories;
	let history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(fetchProductsSearch(searchName.charAt(0).toUpperCase() + searchName.slice(1)));
	};

	const handleInput = (e) => {
		const text = e.target.value;
		setSearchName(text);
	};
	const handleDropdown = (e) => {
		setPickedCategory(e);
	};
	if (pickedCategory !== '') {
		dispatch(fetchProductsCategory(pickedCategory));
		history.push('/');
	}

	function resizeHandle() {
		setDimension(window.innerWidth);
	}

	useEffect(
		() => {
			resizeHandle();

			return () => {
				window.removeEventListener('resize', resizeHandle);
			};
		},
		[ dimension ],
	);

	window.addEventListener('resize', resizeHandle);
	return (
		<div className="customNavbar">
			<div className="navWrapper">
				<div className="left">
					<Link to="/">
						<img src={logoIcon} alt="F" />
					</Link>
					<h2 className="logo">
						{/* onClick={() => (window.location.href = '/')} KJE RAZMISLIME DALI DA GO TURAM RELOADOT */}
						<Link to="/">Flea Market</Link>
					</h2>
				</div>
				<div className="middle">
					<Dropdown onSelect={handleDropdown}>
						<Dropdown.Toggle id="dropdown-basic">
							<span>{dimension <= 458 ? 'Cat..' : 'Category'}</span>
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{categories &&
								categories.map((itemCat) => {
									const { category, _id } = itemCat;

									return (
										<Dropdown.Item key={_id} eventKey={category}>
											<Link to="/">{category}</Link>
										</Dropdown.Item>
									);
								})}
						</Dropdown.Menu>
					</Dropdown>
					<form onSubmit={submitHandler}>
						<input onChange={handleInput} value={searchName} type="text" placeholder="search" />
						<button className="btn-main" type="submit">
							Search
						</button>
					</form>
				</div>
				<div className="right">
					<Link to="/cart">
						<FontAwesomeIcon icon={faShoppingCart} />
					</Link>
					<div className="cart">{numberOfItemsInCart}</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
