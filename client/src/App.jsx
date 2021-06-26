import './Sass/app.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<Navbar />
				<div className="sections">
					{' '}
					<Main />
				</div>
			</div>
		</Provider>
	);
}

export default App;
