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
					<form className="row col-12" id="payment" onSubmit={paymentHandle}>
						<label className="col-12 col-md-6" for="creditCardHolder">
							Credit Card Holder :
						</label>
						<input className="col-12 col-md-6" name="creditCardHolder" type="text" placeholder="James Bond" />
						<label className="col-12 col-md-6" for="creditCards">
							Choose a car:
						</label>
						<select className="col-12 col-md-6" name="creditCards" id="creditCards">
							<option value="masterCard">Master card</option>
							<option value="visaCard">Visa Card</option>
						</select>
						<label className="col-12 col-md-6" for="creditCardNumber">
							Credit Card Number :
						</label>
						<input className="col-12 col-md-6" name="creditCardNumber" type="number" placeholder="________________" />
						<label className="col-12 col-md-6" for="code">
							CVV code :
						</label>
						<input className="col-12 col-md-6" name="code" type="number" placeholder="ex. 235" />
						<label className="col-12 col-md-6" for="expireDate">
							Expire Date :
						</label>
						<input className="col-12 col-md-6" name="expireDate" type="month" placeholder="MM/YY" />
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
