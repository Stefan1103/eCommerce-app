import React from 'react';

const Navbar = () => {
	return (
		<div className="customNavbar">
			<div className="navWrapper">
				<div className="left">
					<h2 className="Logo">Flea Market</h2>
				</div>
				<div className="middle">
					<form>
						<input type="text" placeholder="search for items" />
						<button type="submit" />
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
