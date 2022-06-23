// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redux store
import { Provider } from "react-redux";
import store from "./store/store";

// ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
// !!!!!! React.StrictMode will run useEffect twice in dev mode !!!!!
root.render(
	// <React.StrictMode>
	// 	<Provider store={ store }>
	// 		<App />
	// 	</Provider>
	// </React.StrictMode>
	<Provider store={ store }>
		<App />
	</Provider>
);