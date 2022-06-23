// Imports
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";

// Component
const Cart = () => {

	// Store
	const { items, totalAmount } = useSelector((store) => { return store.cart });

	// Return, card is a section
	return(
		<Wrapper className="card">
			<h2>Your Shopping Cart</h2>
			<ul>
				{
					items.map((item) => {
						return <CartItem key={ item.id } { ...item }/>
					})
				}
			</ul>
			<h3>Cart total : ${ totalAmount.toFixed(2) }</h3>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.section`
	max-width: 30rem;
	background-color: #313131;
	color: white;
	h2{
		font-size: 1.25rem;
		margin: 0.5rem 0;
	}
	h3{
		font-size: 1rem;
		text-align: right;
	}
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

// Export
export default Cart;