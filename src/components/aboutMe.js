import React from 'react';
import photo from '../images/profilepic.jpg';

import { colors } from '../theme/helpers';

import './style.scss';

import styled from 'styled-components';

const AboutMe = ({ className }) => {
  return (
    <section className={className}>
      <div className="has-background-grey-darker is-vcentered columns">
        <div className="column is-one-third is-hidden-touch">
          <figure className="image is-pulled-right is-128x128">
            <img className="is-rounded" src={photo} alt="photo de baptiste lagisquet" />
          </figure>
        </div>
        <div className="column about">
          <h3 className="title is-size-4 has-text-white has-text-centered-mobile">A propos de moi</h3>
          <p className="has-text-white">Actuellement en recherche active d'un premier emploi, j'ai lancé ma micro-entreprise en mai 2020 afin de me constituer une première expérience.
          Je suis passionné de développement et plus précisément de Front-end.
            Je me forme continuellement en JavaScript, React, Gatbsy et j'ai pu travailler en Angular8 lors de mon stage de fin d'études dans la <a href="https://syndis.fr" target="_blank" re="noreferrer noopener">société Syndis.</a></p>
          <h3 className="title is-size-4 has-text-white has-text-centered-mobile">Contact</h3>
          <p className="has-text-white">Baptiste Lagisquet</p>
          </div>
      </div>
    </section>
  );
}

export default styled(AboutMe)`
  section {
    margin: 5rem 0;
  }
  h3 {
    margin-top: 5rem;
  }
  a {
    color: ${colors.primary};
  }
  @media (min-width:769px) {
  .about {
    margin-right: 20vh;
  }
}
  @media (max-width:768px) {
  .about{
    text-align: justify;
    margin: 0 1rem;
  }
}
  .image {
    margin-right: 3rem;
  }
`;