import React, { useState } from 'react';

import Logo from '../images/logo.png';

import './style.scss';

import { colors } from '../theme/helpers';
import styled from 'styled-components';

const Navbar = ({ className }) => {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<section className={className}>
			<div className="hero-head">
				<nav className="navbar is-fixed-top has-text-centered" role="navigation" aria-label="main-navigation">
				<div className="navbar-brand">
						<a href="#accueil" className="navbar-item">
							<img src={Logo} className="image" alt="logo du studio" />
						</a>
						<span role="presentation" onClick={() => setMenuActive(!menuActive)} onKeyDown={() => setMenuActive(!menuActive)} className={`navTrigger ${menuActive ? 'active' : ""}`}>
							<i></i>
							<i></i>
							<i></i>
						</span>

					</div>
					<div className="navbar-end is-hidden-desktop">
						<div id="mainListDiv" className={`main_list ${menuActive ? '' : 'show_list'}`}>

							<a href="#accueil" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Accueil</a>
							<a href="#studio" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>A propos</a>
							<a href="#services" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Expériences</a>
							<a href="#medias" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Formations</a>
							<a href="#avis" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Certifications</a>
							<a href="#map" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Compétences</a>
							<a href="#contact" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Freelance</a>
							<a href="#contact" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Contact</a>
						</div>
					</div>
					<div className="navbar-end is-hidden-touch">
						<a href="#accueil" className="navbar-item is-size-5">Accueil</a>
						<a href="#studio" className="navbar-item is-size-5">A propos</a>
						<a href="#services" className="navbar-item is-size-5">Expériences</a>
						<a href="#medias" className="navbar-item is-size-5">Formations</a>
						<a href="#avis" className="navbar-item is-size-5">Certifications</a>
						<a href="#map" className="navbar-item is-size-5">Compétences</a>
						<a href="#contact" className="navbar-item menu is-size-5">Freelance</a>
						<a href="#contact" className="navbar-item menu is-size-5">Contact</a>
					</div>
				</nav>
			</div>
		</section>
	);
}
export default styled(Navbar)`
	.image {
		margin-left: 1rem
	}
	
	section {
		position: fixed;
	}

	.menu-item {
		margin-left: 2rem;
	}

	.menu {
		margin-right: 1rem;
	}

	.navbar-item {
		color: ${colors.white};
		&:hover  {
			color: ${colors.primary};
			background-color: transparent;
		}
	}

	@media screen and (min-width:1024px) {
		.navbar-end {
		margin-top: 0.2rem !important;
		}
	}
`;
