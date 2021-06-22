import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<div className="customNavbar">
			<div className="navWrapper">
				<div className="left">
					<h2 className="logo">
						<FontAwesomeIcon icon="fa-solid fa-cloud-meatball" />Flea Market
					</h2>
				</div>
				<div className="middle">
					<form>
						<input type="text" placeholder="search using name or category ex: Apple or 'meat'" />
						<button className="btn-search" type="submit">
							Search
						</button>
					</form>
				</div>
				<div className="right">
					<div className="cart" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
