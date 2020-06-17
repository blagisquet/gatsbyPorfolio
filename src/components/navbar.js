import React, { useState } from 'react';
import {slide as Menu} from 'react-burger-menu';
import Logo from '../images/logo.png';

import './style.scss';

import { colors } from '../theme/helpers';
import styled from 'styled-components';

const Navbar = ({ className }) => {

  const [menuActive, setMenuActive] = useState(false);
	return (
		<section className={className} id="accueil">
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
       
      </Menu>
			<div className="hero-head">
				<nav className="navbar is-transparent has-background-black is-fixed-top has-text-centered" role="navigation" aria-label="main-navigation">
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
							<a href="#about" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>A propos</a>
							<a href="#experiences" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Expériences</a>
							<a href="#formations" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Formations</a>
							<a href="#certif" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Certifications</a>
							<a href="#competences" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Compétences</a>
							<a href="#freelance" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Freelance</a>
							<a href="#contact" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Contact</a>
						</div>
					</div>
					<div className="navbar-end has-background-black is-hidden-touch">
						<a href="#accueil" className="navbar-item is-size-5">Accueil</a>
						<a href="#about" className="navbar-item is-size-5">A propos</a>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link is-size-5" href="#experiences">CV</a>
							<div className="navbar-dropdown has-background-black">
								<a href="#experiences" className="navbar-item is-size-5">Expériences</a>
								<a href="#formations" className="navbar-item is-size-5">Formations</a>
								<a href="#certif" className="navbar-item is-size-5">Certifications</a>
								<a href="#competences" className="navbar-item is-size-5">Compétences</a>
							</div>
						</div>
						<a href="#freelance" className="navbar-item is-size-5">Freelance</a>
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
		color: ${colors.white} !important;
		&:hover  {
			color: ${colors.primary} !important;
			background-color: transparent !important;
		}
	}

  .navbar-link {
    color: ${colors.white} !important;
    &:hover {
      color: ${colors.primary} !important;
    }
  }

  .navbar-dropdown-background-color {
  }

  .navbar-dropdown-arrow {
    color: ${colors.white} !important;
    &:hover{
      color: ${colors.primary} !important;
    }
  }

	@media screen and (min-width:1024px) {
		.navbar-end {
		margin-top: 0.2rem !important;
		}
	}
`;
