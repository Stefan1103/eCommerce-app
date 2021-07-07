//react
import React from 'react';
import { useState } from 'react';

//fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMeatball, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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

	let history = useHistory();

	const dispatch = useDispatch();
	const state = useSelector((state) => state.categories);
	const categories = state.categories;
	console.log(categories);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(fetchProductsSearch(searchName.charAt(0).toUpperCase() + searchName.slice(1)));
		history.push('/');
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
	}
	return (
		<div className="customNavbar">
			<div className="navWrapper">
				<div className="left">
					<h2 className="logo">
						<Link to="/">
							<FontAwesomeIcon icon={faCloudMeatball} className="logo-i-style" /> Flea Market
						</Link>
					</h2>
				</div>
				<div className="middle">
					<Dropdown onSelect={handleDropdown}>
						<Dropdown.Toggle id="dropdown-basic">Category</Dropdown.Toggle>

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
						<input onChange={handleInput} value={searchName} type="text" placeholder="search for products using name ex: Apple" />
						<button className="btn-main" type="submit">
							Search
						</button>
					</form>
				</div>
				<div className="right">
					<FontAwesomeIcon icon={faShoppingCart} />
					<div className="cart">0</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;