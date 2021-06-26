import './Sass/app.scss';
import Navbar from './components/layout/Navbar';
import Main from './components/Main/Main';
import CustomAlert from './components/layout/CustomAlert';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
console.log(store);

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<Navbar />

				<div className="sections">
					<CustomAlert />
					<Main />
				</div>
			</div>
		</Provider>
	);
}

export default App;
