// Imports
import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

// Products
const products = [
	{ id:'p1', price:1000, title:'Cahouet', description:'The most wonderful teddy bear in the world!' },
	{ id:'p2', price:500, title:'Jambon', description:'Cahouet\'s best friend.' },
	{ id:'p3', price:655, title:'Pataud', description:'Cahouet\'s armchair.' },
	{ id:'p4', price:999, title:'Mushi', description:'Cahouet\'s worst nigthmare and foe.' },
];

// Component
const Products = () => {

	// Return
	return(
		<Wrapper>
			<h2>Buy your favorite products</h2>
			<ul>
				{
					products.map((product) => {
						return <ProductItem key={ product.id } { ...product } />
					})
				}
			</ul>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.section`
	h2{
		color: white;
		margin: 2rem auto;
		text-align: center;
		text-transform: uppercase;
	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
`;

// Export
export default Products;