// Imports
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItem, removeItem } from "../../store/features/cartSlice";

// Component
const CartItem = ({ id, title, quantity, totalPrice, price }) => {

	// Dispatch
	const dispatch = useDispatch();

	// Increase quantity => addItem
	const increaseQuantity = () => {
		dispatch(addItem({ id, price, title }));
	};

	// Return
	return(
		<Wrapper>
			<header>
				<h3>{ title }</h3>
				<div className="price">
					{ `$${ totalPrice.toFixed(2) } ` }
					<span className="itemprice">
						(${ price.toFixed(2) } / item)
					</span>
				</div>
			</header>
			<div className="details">
				<div className="quantity">
					x <span>{ quantity }</span>
				</div>
				<div className="actionsCart">
					<button onClick={ () => { dispatch(removeItem(id)); } }>-</button>
					<button onClick={ increaseQuantity }>+</button>
				</div>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.li`
	margin: 1rem 0;
	background-color: #575757;
	padding: 1rem;
	header{
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		h3{
			margin: 0 0 0.5rem 0;
			font-size: 1.75rem;
		}
		.price{
			font-size: 1.5rem;
			font-weight: bold;
			span{
				font-weight: normal;
				font-size: 1rem;
				font-style: italic;
			}
		}
	}
	.details{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.quantity{
			span{
				font-size: 1.5rem;
				font-weight: bold;
			}
		}
		.actionsCart{
			display: flex;
			justify-content: flex-end;
			margin: 0.5rem 0;
			button{
				background-color: transparent;
				border: 1px solid white;
				margin-left: 0.5rem;
				padding: 0.15rem 1rem;
				color: white;
				&:hover, &:active{
					background-color: #4b4b4b;
					color: white;
				}
			}
		}
	}
`;

// Export
export default CartItem;