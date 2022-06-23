// Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/layout/Layout";
import Cart from "./components/cart/Cart";
import Products from "./components/shop/Products";
import Notification from "./components/ui/Notification";
import { sendCartData, fetchCartData } from "./store/features/cartActions";

// Variables
let isInitial = true;

// Component
const App = () => {

	// Store
	const { cartIsVisible, notification } = useSelector((store) => { return store.ui });
	const cart = useSelector((store) => { return store.cart });

	// Dispatch
	const dispatch = useDispatch();

	// Fetch data from firebase
	useEffect(() => {
		dispatch(fetchCartData());
	},[dispatch]);

	// Save cart in firebase
	useEffect(() => {
		if (isInitial){
			isInitial = false;
			return;
		}
		// To prevent save cart when first load
		if (cart.changed){
			dispatch(sendCartData(cart));
		}
	},[cart, dispatch]);

	// Return
	return(
		<React.Fragment>
			{
				notification && <Notification { ...notification }/>
			}
			<Layout>
				{
					cartIsVisible && <Cart/>
				}
				<Products/>
			</Layout>
		</React.Fragment>
	);

};

// Export
export default App;