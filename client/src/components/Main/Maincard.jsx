import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import Card from 'react-bootstrap/Card';

const Maincard = () => {
	const data = useSelector((state) => state.products);
	const { products } = data;
	const mainCard = products.filter((product) => product.onSale === false);
	console.log('VO CARD', mainCard);
	return (
		<main>
			{mainCard.map((item) => {
				const { image, name, price } = item;

				return (
					<div className="customCard">
						<Card>
							<Card.Img variant="top" src={image} style={{ maxHeight: '12.5rem', minHeight: '12.5rem' }} />
							<Card.Body>
								<Card.Title>{name}</Card.Title>
								<Card.Text>
									{price}
									<span>/1kg</span>
								</Card.Text>
								<div className="btn-container">
									<button className="btn-add-cart">Learn more</button>
									<button className="btn-add-cart">
										<FontAwesomeIcon icon={faCartPlus} />
									</button>
								</div>
							</Card.Body>
						</Card>
					</div>
				);
			})}
		</main>
	);
};

export default Maincard;
