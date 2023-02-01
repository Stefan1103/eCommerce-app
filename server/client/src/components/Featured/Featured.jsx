import React from 'react';
//compoonents
import Carousel from 'react-bootstrap/Carousel';

//react-router-dom
import { Link } from 'react-router-dom';

//fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';

//assets
import noImage from '../../assets/no-image.png';

const Featured = () => {
	const data = useSelector((state) => state.products);
	const { products } = data;
	const featured = products.filter((product) => product.onSale === true);

	const dispatch = useDispatch();

	const addToCartHandler = (_id, price, name, image) => {
		dispatch(addToCart(_id, price, name, image));
	};

	if (featured !== null && featured.length > 0) {
		return (
			<div className="customCarousel">
				<Carousel>
					{featured.map((featured_product) => {
						const { image, name, discount, price, _id } = featured_product;
						const procentage = discount.split('%');
						const non_discounted_price = price.split('$');
						let discounted_price = procentage[0] / 100 * non_discounted_price[1];
						discounted_price = non_discounted_price[1] - discounted_price;
						return (
							<Carousel.Item key={_id}>
								<div className="C-content">
									<img className="d-block" src={image} alt={noImage} />

									<Carousel.Caption>
										<h1>{name}</h1>
										<p>We have a special discount for this product this week.</p>
										<h2>{discount} OFF !!</h2>
										<h4>{price}</h4>
										<h2>${discounted_price.toFixed(2)}</h2>
										<div className="featured-btn-container">
											<Link to={`/product/${_id}`} className="btn-add-cart">
												Learn more
											</Link>
											<button
												onClick={() => addToCartHandler(_id, discounted_price.toFixed(2), name, image)}
												className="btn-add-cart"
											>
												{' '}
												<FontAwesomeIcon icon={faCartPlus} />
											</button>
										</div>
									</Carousel.Caption>
								</div>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		);
	} else {
		return null;
	}
};

export default Featured;
