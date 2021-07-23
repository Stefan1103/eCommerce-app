//react
import { useRef, useState } from 'react';

//fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPen } from '@fortawesome/free-solid-svg-icons';

//react-router-dom
import { Link, useHistory } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setTotal } from '../../redux/actions/cart';
import React from 'react';

const Checkout = () => {
	let history = useHistory();
	let radios = document.getElementsByName('shippingMethod');
	const [ shpMethod, setshpMethod ] = useState({ method: '', shpPrice: 0 });

	const cart = useSelector((state) => state.cart);
	const cartItems = cart.cartItems;
	console.log(cartItems);
	const dispatch = useDispatch();

	// distinct items from cartItems
	const distinct = [];
	const map = new Map();
	for (const item of cartItems) {
		if (!map.has(item.id)) {
			map.set(item.id, true);
			distinct.push({
				id: item.id,
				name: item.name,
				price: item.price,
				image: item.image,
			});
		}
	}

	let total = parseFloat(cart.total.toFixed(2));
	console.log('TOTALAKGKASEOG', total);
	console.log('SHPPRICE', shpMethod.shpPrice);

	const radioHandle = () => {
		for (let i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				setshpMethod({ method: radios[i].value, shpPrice: radios[i].value === 'EXPRESS' ? 10 : 0 });
			}
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(setTotal(total + shpMethod.shpPrice));
		history.push('/cart/checkout/billing');
		// dispatch post request to handle on the backend with the info of the form for the shipping details
	};
	return (
		<div className="container">
			<div className="wrapper-checkout row">
				<div className="checkout-jumbotron col-8 bg-light">
					<h3>SHIPPING</h3>
					<div className="inner-wrapper-checkout col-12 bg-white">
						<form id="shipping-form" onSubmit={submitHandler}>
							<label className="col-3" for="firstName">
								First name<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="firstName" type="text" placeholder="James" required />
							<label className="col-3" for="lastName">
								Last name<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="lastName" type="text" placeholder="Dean" required />
							<label className="col-3" for="postalCode">
								Postal Code<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="postalCode" type="text" placeholder="1000" required />
							<label className="col-3" for="address1">
								Address:<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="address1" type="text" placeholder=" Abbey Road 14B" required />
							<label className="col-3" for="address2">
								Address<span>(optional)</span>{' '}
							</label>
							<input className="col-8 offset-3" id="address2" type="text" placeholder="Brick Lane 25A" />
							<label className="col-3" for="city">
								City<span className="required-star">*</span>{' '}
							</label>
							<input className="col-8 offset-3" id="city" type="text" placeholder="London" required />
							<h5 className="col-12">
								Select shipping method<span className="required-star">*</span>{' '}
							</h5>
							<div className="free col-12">
								<input onChange={radioHandle} className="col-2" type="radio" name="shippingMethod" id="free" value="FREE" required />
								<label className="col-2" for="free">
									FREE<span>(14days)</span>
								</label>
							</div>

							<div className="express col-12">
								<input onChange={radioHandle} className="col-2" type="radio" id="express" name="shippingMethod" value="EXPRESS" />
								<label className="col-2" for="express">
									Express<span>(1day 10$)</span>
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
								<li>
									Shipping method: <span id="shp-method">{shpMethod.method}</span>
								</li>
								<li>
									Shipping price: <span>${shpMethod.shpPrice}</span>
								</li>
								<li>
									cart total: <span>${total}</span>
								</li>
								<li>
									total: <span>${total + shpMethod.shpPrice}</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="inCart col-12">
						<div className="inCart-title bg-light">
							<h3>
								IN YOUR CART (<span>{cartItems.length}</span>)
							</h3>
						</div>
						<div className="inCart-content">
							{distinct.map((item) => {
								const { id, image, price, name } = item;
								let qty = cartItems.filter((item) => item.id === id);
								console.log(qty);
								return (
									<React.Fragment>
										<div className="inCart-content-items" key={id}>
											<div className="img-container">
												<img className="img-fluid" src={image} />
											</div>
											<div className="details-container">
												<ul>
													<li>name : {name}</li>
													<li>
														price: <span>{typeof price === 'string' ? price : `$${price}`}/1kg</span>
													</li>
													<li>quantity: {qty.length}</li>
												</ul>
											</div>
										</div>
									</React.Fragment>
								);
							})}
						</div>
						<Link className="edit-cart-link" to="/cart">
							edit cart <FontAwesomeIcon icon={faPen} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
