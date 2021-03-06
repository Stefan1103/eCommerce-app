// react
import React, { useEffect } from 'react';

//fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//components
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

//react-router-dom
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

//redux
import { fetchSelectedProduct } from '../../redux/actions/products';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';

//assets
import noImage from '../../assets/no-image.png';

const Productdetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSelectedProduct(id));
	}, []);
	const products = useSelector((state) => state.products);
	const { loadingDetails, error, selectedProduct } = products;
	const { name, image, calories, category, desc, price, discount, onSale } = selectedProduct;
	let discounted_price;

	if (!loadingDetails) {
		if (onSale) {
			let non_discounted_price = price.split('$');
			const procentage = discount.split('%');
			discounted_price = procentage[0] / 100 * non_discounted_price[1];
			discounted_price = non_discounted_price[1] - discounted_price;
		}
	}
	const detailsaddToCartHandler = (id) => {
		if (!loadingDetails)
			dispatch(addToCart(id, discounted_price ? parseFloat(discounted_price.toFixed(2)) : parseFloat(price.split('$')[1]), name, image));
	};

	return loadingDetails ? (
		<Loading />
	) : error ? (
		<Router>
			<Error />
		</Router>
	) : (
		<div className="container">
			<div className="wrapper row">
				<div className="img-container col-sm-4 col-xs-12">
					<img className="img-fluid" src={image} alt={noImage} />
				</div>
				<div className="details-container col-sm-8 col-xs-12">
					<h2>{name}</h2>
					<hr className="style-details" />

					<p>- {desc}</p>
					<ul>
						<li>
							{' '}
							<h4>
								Category: <span> {category}</span>
							</h4>
						</li>
						{onSale ? (
							<li>
								<h4>
									Discount:<span>{discount}</span>
								</h4>
							</li>
						) : (
							''
						)}
						{calories && (
							<li>
								<h4>
									Calories:<span>{calories}</span>
								</h4>
							</li>
						)}
						{onSale ? (
							<li>
								<h4>
									Price: <span className="price-sale">{price}</span>
								</h4>
							</li>
						) : (
							<li>
								<h4>
									Price: <span className="price">{price}</span>
								</h4>
							</li>
						)}
						{onSale ? (
							<li>
								<h3>
									special price: <span>${discounted_price.toFixed(2)}</span>
								</h3>
							</li>
						) : (
							''
						)}
					</ul>
				</div>
			</div>
			<div className="button-container">
				<Link to="/" className="btn-back">
					<FontAwesomeIcon className="pr-1" icon={faArrowLeft} />
					Back
				</Link>
				<button onClick={() => detailsaddToCartHandler(id)} className="btn-add-cart">
					Add to cart <FontAwesomeIcon icon={faCartPlus} />
				</button>
			</div>
		</div>
	);
};

export default Productdetails;
