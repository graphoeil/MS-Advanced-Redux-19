// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	items:[],
	totalQuantity:0,
	totalAmount:0,
	// To prevent save cart when first load (see App.js)
	changed:false
};

// Slice
const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{
		// Get cart from firebase
		replaceCart:(state, action) => {
			const { items, totalQuantity, totalPrice } = action.payload;
			state.items = items || [];
			state.totalQuantity = totalQuantity || 0;
			state.totalPrice = totalPrice || 0;
		},
		// Add item
		addItem:(state, action) => {
			const newItem = action.payload;
			// Update total quantity, no matter it's in cart or not
			// A best approach is may be to calculate total quantity
			// each timer the cart changes (with reducer function)
			state.changed = true;
			state.totalQuantity++;
			// In cart ?
			const existingItem = state.items.find((item) => {
				return item.id === newItem.id;
			});
			// Not in cart => add
			if (!existingItem){
				// Don't forget immer, here we don't mutate the state ,-)
				state.items.push({
					id:newItem.id,
					title:newItem.title,
					price:newItem.price,
					quantity:1,
					totalPrice:newItem.price
				});
			} else {
				// In cart => increase quantity
				// No need to remplace item in items array, we just overwrite
				// properties of existingItem
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
			// Total amount
			state.totalAmount = state.items.reduce((acc, current) => {
				acc += current.price * current.quantity;
				return acc;
			},0);
			// Save cart
		},
		// Remove item
		removeItem:(state, action) => {
			const id = action.payload;
			state.changed = true;
			state.totalQuantity--;
			const existingItem = state.items.find((item) => {
				return item.id === id;
			});
			if (existingItem.quantity === 1){
				// Remove from items array
				state.items = state.items.filter((item) => {
					return item.id !== id;
				});
			} else {
				// Decrease quantity
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
			// Total amount
			state.totalAmount = state.items.reduce((acc, current) => {
				acc += current.price * current.quantity;
				return acc;
			},0);
		}
	}
});

// Actions export
export const { replaceCart, addItem, removeItem } = cartSlice.actions;

// Reducer export
export default cartSlice.reducer;