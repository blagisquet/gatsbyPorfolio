import React from 'react';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';


const Experiences = ({ className }) => {
  return (
    <section className={className}>
      <div className="columns">
        <div className="column exp is-one-third">
          <h3 className="has-text-weight-bold is-pulled-right">Expériences</h3>
        </div>
        <div className="column experiences">
          <div>
            <h4 className="has-text-weight-bold">Freelance</h4>
            <p><span>Développeur Web</span> • Mars 2020 - Aujourd'hui</p>
            <p>Réalisation d'un site web en GatsbyJs pour le studio Septième Sens, conception d'interfaces (Adobe XD), UX Design, méthodologie Agile. </p>
          </div>
          <div>
            <h4 className="has-text-weight-bold">Syndis</h4>
            <p><span>Stagiaire développeur Angular8</span> • Août 2019 - Novembre 2019</p>
            <p>Conception d'interface (Figma), création des spécifications (OpenAPI), diagramme UML, développement des interfaces sur le site (syndis.fr) ainsi que sur l'application de gestion de copropriété.</p>
          </div>
          <div>
            <h4 className="has-text-weight-bold">Boulangerie Charrier</h4>
            <p><span>Vendeur</span> • Avril 2018 - Août 2018</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default styled(Experiences)`
  h3 {
    text-decoration: underline ${colors.primary};
    font-size: 32px;
  }
  h4 {
    font-size: 1.5rem;
  }
  span {
    font-style: italic;
  }
  /* .exp {
    margin-right: 2.6rem;
  }
  @media (min-width:769px) {
  .experiences {
    margin-right: 20vh;
  }
}
  @media (max-width:768px) {
  .experiences{
    margin: 0 1rem;
  }
} */
`;