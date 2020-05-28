import React from 'react';

import './style.scss';

import AboutMe from './aboutMe';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<AboutMe />
		<Footer />
	</div>
);

export default Layout;
