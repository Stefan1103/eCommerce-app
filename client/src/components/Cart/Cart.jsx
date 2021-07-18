//assets
import shopingCart from '../../assets/shopping-cart.png';

//fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faArrowLeft, faArrowRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

//react-router-dom
import { useHistory } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeOneFromCart, emptyCart } from '../../redux/actions/cart';

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart);
	let filteredItems;
	let total;
	let history = useHistory();

	const prevPathHandle = () => {
		history.goBack();
	};

	const addHandle = (id, price, name, image) => {
		dispatch(addToCart(id, price, name, image));
	};
	const removeHandle = (id) => {
		dispatch(removeFromCart(id));
	};
	const removeSingleHandle = (id) => {
		dispatch(removeOneFromCart(id));
		filteredItems.shift();
	};
	const emptyCartHandle = () => {
		dispatch(emptyCart());
	};

	if (cartItems.length <= 0) {
		total = 0;
	} else {
		const prices = cartItems.map((product) => {
			let numPrice = typeof product.price !== 'number' ? product.price.split('$').pop() : product.price;
			return parseFloat(numPrice);
		});
		total = prices.reduce((total, currentvalue) => total + currentvalue);
	}

	// distinct array that gives the unique items from cartItems array
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
	return (
		<div className="container">
			<div className="wrapper-cart row">
				<h1 className="col-12">Your Cart</h1>
				<div className="img-container-cart col-4">
					<img className="img-fluid" src={shopingCart} />
				</div>
				<div className="cart-items col-8">
					{cartItems.length <= 0 ? (
						<div className="empty-cart">
							<h2>
								Your cart is empty !! <FontAwesomeIcon icon={faExclamationTriangle} />
							</h2>
						</div>
					) : (
						distinct.map((item) => {
							const { id, image, name, price } = item;
							filteredItems = cartItems.filter((item) => item.id === id);
							let qty = filteredItems.length;
							return (
								<ul>
									<li>
										<div className="cart-items-container">
											<div className="cart-item-specs col-7">
												<div className="cart-item-img">
													<img className="img-fluid img-thumbnail" src={image} />
												</div>
												<div className="cart-item-details">
													<h3>
														name: <span className="name-span">{name}</span>
													</h3>
													<h3>
														price: <span className="price-span">{price}/1kg</span>
													</h3>
												</div>
											</div>
											<div className="cart-item-btn-container col-5">
												<button className="btn-add-cart" onClick={() => addHandle(id, price, name, image)}>
													add <FontAwesomeIcon icon={faCartPlus} />
												</button>
												<button className="btn-remove" onClick={() => removeSingleHandle(id)}>
													remove
												</button>
												<button className="btn-remove" onClick={() => removeHandle(id)}>
													X
												</button>
												<textbox>{qty}</textbox>
											</div>
										</div>
									</li>
								</ul>
							);
						})
					)}
				</div>
			</div>
			<hr className="style-details-cart" />
			<div className="wrapper-calc row">
				<div className="calc-container col-12">
					<button onClick={prevPathHandle} className="btn-back">
						<FontAwesomeIcon icon={faArrowLeft} /> Back
					</button>
					<textbox>
						Your total price : <span>${total.toFixed(2)}</span>
					</textbox>
					<div className="buttons-calc">
						<button onClick={emptyCartHandle} className="btn-remove">
							Empty the cart
						</button>
						<button className="btn-add-cart ml-3">
							Cash out <FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
