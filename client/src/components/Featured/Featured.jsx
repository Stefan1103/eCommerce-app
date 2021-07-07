import React from 'react';
//compoonents
import Carousel from 'react-bootstrap/Carousel';

//react-router-dom
import { Link } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';

const Featured = () => {
	const data = useSelector((state) => state.products);
	const { products } = data;
	const featured = products.filter((product) => product.onSale === true);

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
									<img className="d-block" src={image} alt="First slide" />

									<Carousel.Caption>
										<h1>{name}</h1>
										<p>We have a special discount for this product this week.</p>
										<h2>{discount} OFF !!</h2>
										<h4>{price}</h4>
										<h2>${discounted_price.toFixed(2)}</h2>
										<Link to={`/product/${_id}`} className="btn-add-cart">
											Learn more
										</Link>
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
