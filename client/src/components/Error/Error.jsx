//fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

//react-router-dom
import { Link } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';

const Error = () => {
	const products = useSelector((state) => state.products);
	const categories = useSelector((state) => state.categories);
	const errProd = products.error;
	const errCat = categories.error;
	return (
		<div className="error">
			<h2>
				<span>
					<FontAwesomeIcon icon={faExclamationTriangle} />
				</span>{' '}
				This page does not exist
			</h2>
			{errProd || errCat ? (
				<h2>Error {errProd || errCat}!!!</h2>
			) : (
				<h2>
					Get back to our <Link to="/">homepage</Link>
				</h2>
			)}
		</div>
	);
};

export default Error;
