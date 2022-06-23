// Imports
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem } from "../../store/features/cartSlice";

// Component
const ProductItem = ({ id, title, price, description }) => {

	// Dispatch
	const dispatch = useDispatch();

	// Add to cart
	const handleClick = () => {
		dispatch(addItem({ id, price, title }));
	};

	// Return
	return(
		<Wrapper className="card">
			<header>
				<h3>{ title }</h3>
				<div className="price">${ price.toFixed(2) }</div>
			</header>
			<p>{ description }</p>
			<div className="actionsShop">
				<button onClick={ handleClick }>
					Add to Cart
				</button>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.li`
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		h3{
			margin: 0.5rem 0;
			font-size: 1.25rem;
		}
		.price{
			border-radius: 30px;
			padding: 0.15rem 1.5rem;
			background-color: #3a3a3a;
			color: white;
			font-size: 1.5rem;
		}
	}
	p{ color: #3a3a3a; }
	.actionsShop{
		display: flex;
		justify-content: flex-end;
	}
`;

// Export
export default ProductItem;