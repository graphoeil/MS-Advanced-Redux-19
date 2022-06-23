// Imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleCart } from "../../store/features/uiSlice";

// Component
const CartButton = () => {

	// Store
	const { totalQuantity } = useSelector((store) => { return store.cart });

	// Dispatch
	const dispatch = useDispatch();

	// Toggle cart
	const handleClick = () => {
		dispatch(toggleCart());
	};

	// Return
	return(
		<Wrapper onClick={ handleClick }>
			<span>My Cart</span>
      		<span className="badge">{ totalQuantity }</span>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.button`
	background-color: transparent;
	border-color: #1ad1b9;
	color: #1ad1b9;
	&:hover, &:active{
		color: white;
		span{
			&.badge{
				background-color: white;
			}
		}
	}
	span{
		margin: 0 0.5rem;
		&.badge{
			background-color: #1ad1b9;
			border-radius: 30px;
			padding: 0.15rem 1.25rem;
			color: #1d1d1d;
		}
	}
`;

// Export
export default CartButton;