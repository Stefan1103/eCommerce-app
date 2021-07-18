import Featured from '../Featured/Featured';
import CustomAlert from './CustomAlert';
import Maincard from '../Main/Maincard';
import React from 'react';

const LandingPage = () => {
	return (
		<React.Fragment>
			<div className="container">
				<Featured />
				<CustomAlert />
				<Maincard />
			</div>
		</React.Fragment>
	);
};

export default LandingPage;
