// Imports
import React from "react";
import styled from "styled-components";

// Component
const Notification = ({ status, title, message }) => {

	// Return
	return(
		<Wrapper className={ status }>
			<h2>{ title }</h2>
			<p>{ message }</p>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.section`
	width: 100%;
	height: 3rem;
	background-color: #1a8ed1;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 10%;
	align-items: center;
	color: white;
	&.error{ background-color: #690000; }
	&.success{ background-color: #1ad1b9; }
	h2, p{
		font-size: 1rem;
		margin: 0;
	}
`;

// Export
export default Notification;