import Featured from '../Featured/Featured';
import CustomAlert from './CustomAlert';
import Main from '../Main/Main';
import React from 'react';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Featured />
			<CustomAlert />
			<Main />
		</React.Fragment>
	);
};

export default LandingPage;
