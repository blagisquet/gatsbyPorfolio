import React from 'react';
import photo from '../images/profilepic.jpg';

import { colors } from '../theme/helpers';

import './style.scss';

import styled from 'styled-components';

const AboutMe = ({ className }) => {
  return (
    <section className={className}>
      <div className="has-background-grey-darker is-vcentered columns">
        <div className="column is-one-third">
          <figure className="image is-pulled-right is-128x128">
            <img className="is-rounded" src={photo} alt="photo de baptiste lagisquet" />
          </figure>
        </div>
        <div className="column about">
          <h3 className="title is-size-3 has-text-white">A propos de moi</h3>
          <p className="has-text-white">Actuellement en recherche active d'un premier emploi, j'ai lancé ma micro-entreprise en mai 2020 afin d'avoir une première expérience. 
            Je suis passionné de développement et plus précisément en Front-end. 
            Je me forme continuellement en JavaScript, React, Gatbsy et ai travaillé en Angular8 lors de mon stage de fin d'études dans la <a href="https://syndis.fr">société Syndis.</a></p>
        </div>
      </div>
    </section>
  );
}

export default styled(AboutMe)`
  a {
    color: ${colors.primary};
  }
  .about {
    margin-right: 15rem;
  }
  .image {
    margin-right: 3rem;
  }
`;