//fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

//react-router-dom
import { Link, useHistory } from 'react-router-dom';

const Checkout = () => {
	let history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		history.push('/cart/checkout/billing');
		// dispatch post request to handle on the backend with the info of the form for the shipping details
	};
	return (
		<div className="container">
			<div className="wrapper-checkout row">
				<div className="checkout-jumbotron col-8 bg-light">
					<div className="title-shipping col-12">
						<h3>SHIPPING</h3>
					</div>
					<div className="inner-wrapper-checkout col-12 bg-white">
						<form id="shipping-form" onSubmit={submitHandler}>
							<label className="col-3" for="firstName">
								First name<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="firstName" type="text" placeholder="Aleksandar" required />
							<label className="col-3" for="lastName">
								Last name<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="lastName" type="text" placeholder="Bogatinov" required />
							<label className="col-3" for="postalCode">
								Postal Code<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="postalCode" type="text" placeholder="1000" required />
							<label className="col-3" for="address1">
								Address:<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="address1" type="text" placeholder="street Franz Preshern 14B" required />
							<label className="col-3" for="address2">
								Address<span>(optional)</span>{' '}
							</label>
							<input className="col-8 offset-3" id="address2" type="text" placeholder="street Rafael Batino 25A" />
							<label className="col-3" for="city">
								City<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="city" type="text" placeholder="Skopje" required />
							<h5 className="col-12">
								Select shipping method<span className="required-star">*</span>{' '}
							</h5>
							<div className="standard col-12">
								<input className="col-2" type="radio" name="shippingMethod" id="standard" value="STANDARD" required />
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
								Email<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="email" type="text" placeholder="big_chad@gmail.com" required />
							<label className="col-3" for="phone">
								Phone <span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="phone" type="text" placeholder="+389 __ ___ ___" required />
						</form>
					</div>
					<div className="bottom-container">
						<h6>
							Required fields<span className="required-star">*</span>
						</h6>
						<button type="submit" form="shipping-form" className="btn-add-cart">
							CONTINUE TO BILLING <FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
				<div className="checkout-jumbotron-side col-4">
					<div className="summary col-12">
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
					<div className="inCart col-12">
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
		</div>
	);
};

export default Checkout;
