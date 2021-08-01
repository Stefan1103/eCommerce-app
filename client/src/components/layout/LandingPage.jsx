import Featured from '../Featured/Featured';
import Maincard from '../Main/Maincard';
import React from 'react';

const LandingPage = () => {
	return (
		<React.Fragment>
			<div className="container">
				<Featured />
				<Maincard />
			</div>
		</React.Fragment>
	);
};

export default LandingPage;
