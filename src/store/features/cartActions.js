// Imports
import { showNotification, clearNotification } from "./uiSlice";
import { replaceCart } from "./cartSlice";

// Variables
const firebaseURL = 'https://ms-advanced-redux-19-default-rtdb.europe-west1.firebasedatabase.app/cart.json';

// Get cart data from firebase
export const fetchCartData = () => {
	return async(dispatch) => {
		const fetchData = async() => {
			const response = await fetch(firebaseURL);
			if (!response.ok){
				throw new Error('Could not fetch cart data!');
			}
			const data = await response.json();
			return data;
		};
		try {
			const cartData = await fetchData();
			dispatch(replaceCart(cartData));
		} catch (error){
			dispatch(showNotification({
				status:'error',
				title:'Error',
				message:'Could not fetch cart data!'
			}));
		}
	};
};

// Saving cart data
// We also could use createAsyncThunk with more possibility, 
// with createAsyncThunk we don't need dispatch, we can use extraReducers ,-)
export const sendCartData = (cartData) => {
	return async(dispatch) => {
		// Pending
		dispatch(showNotification({
			status:'pending',
			title:'Sending...',
			message:'Sending cart data!'
		}));
		// Send fetch request
		const sendRequest = async() => {
			// Fetch
			const response = await fetch(firebaseURL, {
				// Put will overwrite existing data, post will add
				method:'PUT',
				body:JSON.stringify(cartData)
			});
			// Error ?
			if (!response.ok){
				throw new Error('Sending cart data failed...');
			}
		};
		try {
			await sendRequest();
			// Success
			dispatch(showNotification({
				status:'success',
				title:'Success',
				message:'Your cart has been saved!'
			}));
			// Removing success
			setTimeout(() => {
				dispatch(clearNotification());
			},500);
		} catch (error){
			dispatch(showNotification({
				status:'error',
				title:'Error',
				message:'Sending cart data failed...'
			}));
		}
	}
};