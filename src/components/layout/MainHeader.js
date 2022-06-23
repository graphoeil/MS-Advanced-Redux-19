// Imports
import React from "react";
import styled from "styled-components";
import CartButton from "../cart/CartButton";

// Component
const MainHeader = () => {

	// Return
	return(
		<Wrapper>
			<h1>ReduxCart</h1>
			<nav>
				<ul>
					<li>
						<CartButton />
					</li>
				</ul>
			</nav>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.header`
	width: 100%;
	height: 5rem;
	padding: 0 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #252424;
	h1{
		color: white;
	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
`;

// Export
export default MainHeader;