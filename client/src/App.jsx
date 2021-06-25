import './Sass/app.scss';
import Navbar from './components/Navbar/Navbar';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="app">
				<Navbar />
				<div className="sections"> HELLO HELLO WORLEDS!</div>
			</div>
		</Provider>
	);
}

export default App;
