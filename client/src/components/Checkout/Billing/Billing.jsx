// redux
import { useSelector } from 'react-redux';

const Billing = () => {
	const cart = useSelector((state) => state.cart);
	const total = cart.total;

	const paymentHandle = (e) => {
		e.preventDefault();
		// SEND THE INFO TO BACKEND for validation and onwards to do the payment if good
	};
	return (
		<div className="container container-billing">
			<div className="billing-wrapper bg-light">
				<div className="title-section">
					<h1>PAYMENT</h1>
					<h2>${total}</h2>
				</div>

				<div className="billing-wrapper-inner">
					<form className=" row col-12" id="payment" onSubmit={paymentHandle}>
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
				<button type="submit" className="btn-add-cart" form="payment">
					Pay
				</button>
			</div>
		</div>
	);
};

export default Billing;
