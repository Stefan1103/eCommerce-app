import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/products';

import Card from 'react-bootstrap/Card';

const Maincard = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	console.log('beforeeffect', products);
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	console.log('aftereffect', products);
	return (
		<div className="customCard">
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
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
};

export default Maincard;
