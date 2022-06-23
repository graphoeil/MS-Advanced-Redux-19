// Imports
import React from "react";
import MainHeader from "./MainHeader";

// Component
const Layout = ({ children }) => {

	// Return
	return(
		<React.Fragment>
			<MainHeader/>
			<main>{ children }</main>
		</React.Fragment>
	);

};

// Export
export default Layout;