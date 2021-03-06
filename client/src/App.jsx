// styles
import './Sass/app.scss';

//components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './components/layout/LandingPage';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import Productdetails from './components/ProductDetails/Productdetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Billing from './components/Checkout/Billing/Billing';

//react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//react
import { useEffect } from 'react';

//redux
import { fetchProducts } from './redux/actions/products';
import { fetchCategories } from './redux/actions/categories';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const categories = useSelector((state) => state.categories);
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchCategories());
	}, []);
	return products.loading || categories.loading ? (
		<Loading />
	) : products.error || categories.error ? (
		<Router>
			<Error />
		</Router>
	) : (
		<Router>
			<div className="app">
				<Navbar />
				<div className="sections">
					<Switch>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/product/:id" children={<Productdetails />} />
						<Route exact path="/cart">
							<Cart />
						</Route>
						<Route exact path="/cart/checkout">
							<Checkout />
						</Route>
						<Route exact path="/cart/checkout/billing">
							<Billing />
						</Route>
						<Route>
							<Error />
						</Route>
					</Switch>
				</div>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
