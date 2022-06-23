// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	cartIsVisible:false,
	notification:null
};

// Slice
const uiSlice = createSlice({
	name:'ui',
	initialState,
	reducers:{
		// Toggle cart
		toggleCart:(state) => {
			state.cartIsVisible = !state.cartIsVisible;
		},
		// Notification
		showNotification:(state, action) => {
			const { status, title, message } = action.payload;
			state.notification = {
				status:status,
				title:title,
				message:message
			};
		},
		clearNotification:(state) => {
			return { ...state, notification:null };
		}
	}
});

// Actions export
export const { toggleCart, showNotification, clearNotification } = uiSlice.actions;

// Reducer export
export default uiSlice.reducer;