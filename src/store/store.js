// Imports
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/uiSlice";
import cartReducer from "./features/cartSlice";

// Store
const store = configureStore({
	reducer:{
		ui:uiReducer,
		cart:cartReducer
	}
});

// Export
export default store;