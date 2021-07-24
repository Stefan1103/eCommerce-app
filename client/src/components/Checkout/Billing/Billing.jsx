import React from 'react';

const Billing = () => {
	return (
		<div className="container container-billing">
			<div className="billing-wrapper bg-light">
				<h1>PAYMENT</h1>
				<div className="billing-wrapper-inner">
					<form className=" row col-12" id="payment">
						<div className="left col-6">
							<label for="creditCardHolder">Credit Card Holder :</label>
							<label for="creditCards">Choose a car:</label>
							<label for="creditCardNumber">Credit Card Number :</label>
							<label for="code">CVV code :</label>
							<label for="expireDate">Expire Date :</label>
						</div>

						<div className="right col-6">
							<input name="creditCardHolder" type="text" placeholder="James Bond" />

							<select name="creditCards" id="creditCards">
								<option value="masterCard">Master card</option>
								<option value="visaCard">Visa Card</option>
							</select>

							<input name="creditCardNumber" type="number" placeholder="________________" />

							<input name="code" type="number" placeholder="ex. 235" />

							<input name="expireDate" type="month" placeholder="MM/YY" />
						</div>
					</form>
				</div>
				<button className="btn-add-cart">Pay</button>
			</div>
		</div>
	);
};

export default Billing;
