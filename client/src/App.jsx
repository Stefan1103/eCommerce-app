import './Sass/app.scss';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './components/layout/LandingPage';

import { useEffect } from 'react';

//redux
import { fetchProducts } from './redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	return products.loading ? (
		<h2>Loading...</h2>
	) : products.error ? (
		<h2>{products.error}</h2>
	) : (
		<div className="app">
			<Navbar />
			<div className="sections">
				<div className="container">
					<LandingPage />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
