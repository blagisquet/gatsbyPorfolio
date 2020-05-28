import React from 'react';

import './style.scss';

import Home from './home';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero is-fullheight-with-navbar">
		<Navbar />
		<Home />
		<span id="aboutme"></span>
	</section>
);

export default Header;
