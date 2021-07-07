// react
import React, { useEffect } from 'react';

//components
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

//react-router-dom
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//redux
import { fetchSelectedProduct } from '../../redux/actions/products';
import { useSelector, useDispatch } from 'react-redux';

const Productdetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSelectedProduct(id));
	}, []);
	const products = useSelector((state) => state.products);
	console.log('VODETAILS', products);
	const { loadingDetails, error, selectedProduct } = products;
	console.log('selected product', selectedProduct);
	const { name, image, calories, category, desc, price, discount, onSale } = selectedProduct;
	return loadingDetails ? (
		<Loading />
	) : error ? (
		<Router>
			<Error />
		</Router>
	) : (
		<div>{desc}</div>
	);
};

export default Productdetails;
