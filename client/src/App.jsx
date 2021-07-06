import './Sass/app.scss';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './components/layout/LandingPage';
import Loading from './components/Loading/Loading';

import { useEffect } from 'react';

//redux
import { fetchProducts } from './redux/actions/products';
import { fetchCategories } from './redux/actions/categories';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchCategories());
	}, []);
	return products.loading ? (
		<Loading />
	) : products.error ? (
		<h2>{products.error}</h2>
	) : (
		<div className="app">
			<Navbar />
			<div className="sections">
				<LandingPage />
			</div>
			<Footer />
		</div>
	);
}

export default App;
