import React from 'react';

import Hero from '../theme/hero';

import { colors } from '../theme/helpers';

import styled from "styled-components";

import './style.scss';

const home = ({ className }) => {
  return (
    <Hero>
      <section className={className}>
        <div className="home">
          <h1 className="is-invisible">Portfolio Baptiste Lagisquet</h1>
          <h2 className="has-text-centered has-text-weight-bold title is-size-1">Baptiste Lagisquet</h2>
          <h3 className="has-text-centered subtitle is-size-2">Développeur web et mobile</h3>
          <div className="has-text-centered reseaux">
            <a href="https://www.linkedin.com/in/baptiste-lagisquet-bb2a8937/" target="_blank" rel="noreferrer noopener"><span className="icon"><i className="fab fa-3x fa-linkedin"></i></span></a>
            <a href="https://github.com/blagisquet" target="_blank" rel="noreferrer noopener"><span className="icon"><i className="fab fa-3x fa-github-square"></i></span></a>
            <a href="https://twitter.com/LagisquetB" target="_blank" rel="noreferrer noopener"><span className="icon"><i className="fab fa-3x fa-twitter-square"></i></span></a>
          </div>
        </div>
        <a href="#aboutme"><span className="arrow icon">
          <i className="fas fa-2x fa-arrow-circle-down is-hidden-tablet"></i>
          <i className="fas fa-3x fa-arrow-circle-down is-hidden-mobile"></i>
        </span></a>
      </section>
    </Hero>
  );
}

export default styled(home)`
  h2 {
    color: ${colors.white};
  }
  h3 {
    color: ${colors.primary};
  }
  @media (min-width:375px) and (max-width:768px) {
    .home {
      margin-top: 20vh;
    }
  }
  @media (min-width:769px) {
    .home {
      margin-top: 30vh;
    }
  }
  .reseaux {
    margin-top: 3rem;
    a {
      margin: 2.5rem;
    }
  }
  .arrow {
    position: absolute;
    top: 92vh;
    left: 49%;
    transform: scale(1);
    animation: pulse 5s ease infinite;
    @media (min-width:501px) and (max-width: 768px){
      top: 85vh;
      left: 48%;
    }
    @media (max-width:500px) {
      top: 85vh;
      left: 46%;
    }
  }
  .fas, .fab {
    color: white;
    &:hover {
      color: ${colors.primary};
    }
  }
  @keyframes pulse {
    0% {
    transform:scale(1);
    }
    5% {
      transform:scale(1.25);
    }
    20% {
      transform:scale(1);
    }
    30% {
      transform:scale(1);
    }
    35% {
      transform:scale(1.25);
    }
    50% {
      transform:scale(1);
    }
    55% {
      transform:scale(1.25);
    }
    70% {
      transform:scale(1);
    }
  }
`;