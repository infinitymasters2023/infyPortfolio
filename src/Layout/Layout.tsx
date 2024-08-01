import React, { ReactNode } from 'react'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header direction={'up'} />
			{children}
			<Footer />
		</>
	);
};

export default Layout