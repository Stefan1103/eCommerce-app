import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMeatball, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<div className="customNavbar">
			<div className="navWrapper">
				<div className="left">
					<h2 className="logo">
						<FontAwesomeIcon icon={faCloudMeatball} className="logo-i-style" /> Flea Market
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
					<FontAwesomeIcon icon={faShoppingCart} />
					<div className="cart">0</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
