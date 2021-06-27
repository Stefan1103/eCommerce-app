import './Sass/app.scss';
import Navbar from './components/layout/Navbar';
import Main from './components/Main/Main';
import CustomAlert from './components/layout/CustomAlert';
import Footer from './components/layout/Footer';
import Featured from './components/Featured/Featured';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<Navbar />

				<div className="sections">
					<div className="container">
						<Featured />
						<CustomAlert />
						<Main />
					</div>
				</div>
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
