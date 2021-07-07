import React from 'react';
//fontAWSOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

//redux
import { useSelector } from 'react-redux';

//reac-router-dom
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

const Maincard = () => {
	const data = useSelector((state) => state.products);
	const { products } = data;
	const mainCard = products.filter((product) => product.onSale === false);
	return (
		<main>
			{mainCard.map((item) => {
				const { image, name, price, _id } = item;

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
									<Link to={`/product/${_id}`} className="btn-add-cart">
										Learn more
									</Link>
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
