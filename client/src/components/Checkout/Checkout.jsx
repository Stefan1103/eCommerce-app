import React from 'react';

const Checkout = () => {
	return (
		<div className="container">
			<div className="wrapper-checkout row">
				<div className="checkout-jumbotron col-8 bg-light">
					<div className="title-shipping col-12">
						<h3>SHIPPING</h3>
					</div>
					<div className="inner-wrapper-checkout col-12 bg-white">
						<form>
							<label className="col-3" for="firstName">
								First name:{' '}
							</label>
							<input className="col-8 offset-3" id="firstName" type="text" placeholder="Aleksandar" />
							<label className="col-3" for="lastName">
								Last name:{' '}
							</label>
							<input className="col-8 offset-3" id="lastName" type="text" placeholder="Bogatinov" />
							<label className="col-3" for="postalCode">
								Postal Code:{' '}
							</label>
							<input className="col-8 offset-3" id="postalCode" type="text" placeholder="1000" />
							<label className="col-3" for="address1">
								Address:{' '}
							</label>
							<input className="col-8 offset-3" id="address1" type="text" placeholder="street Franz Preshern 14B" />
							<label className="col-3" for="address2">
								Address<span>(optional)</span>:{' '}
							</label>
							<input className="col-8 offset-3" id="address2" type="text" placeholder="street Rafael Batino 25A" />
							<label className="col-3" for="city">
								City:{' '}
							</label>
							<input className="col-8 offset-3" id="city" type="text" placeholder="Skopje" />
							<h5 className="col-12">Select shipping method: </h5>
							<div className="standard col-12">
								<input className="col-2" type="radio" name="shippingMethod" id="standard" value="STANDARD" />
								<label className="col-2" for="standard">
									Standard
								</label>
							</div>

							<div className="express col-12">
								<input className="col-2" type="radio" id="express" name="shippingMethod" value="EXPRESS" />
								<label className="col-2" for="express">
									Express<span>(10$)</span>
								</label>
							</div>

							<label className="col-3" for="email">
								Email:{' '}
							</label>
							<input className="col-8 offset-3" id="email" type="text" placeholder="big_chad@gmail.com" />
							<label className="col-3" for="phone">
								Phone:{' '}
							</label>
							<input className="col-8 offset-3" id="phone" type="text" placeholder="+389 __ ___ ___" />
						</form>
					</div>
				</div>
				<div className="summary col-4">
					<div className="summary-title bg-light">
						<h3>SUMMARY</h3>
					</div>
					<div className="summary-content">
						<ul>
							<li>Shipping method: </li>
							<li>total: 123465$</li>
						</ul>
					</div>
				</div>
				<div className="inCart col-4 offset-8">
					<div className="inCart-title bg-light">
						<h3>IN YOUR CART (5)</h3>
					</div>
					<div className="inCart-content">
						<img />
						<ul>
							<li>name : AHAUEGF</li>
							<li>price: 123465$</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
