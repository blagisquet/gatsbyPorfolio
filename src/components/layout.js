import React from 'react';

import './style.scss';

import AboutMe from './aboutMe';
import Experiences from './experiences';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<AboutMe />
		<Experiences />
		<Footer />
	</div>
);

export default Layout;
