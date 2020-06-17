import React from 'react';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';


const Experiences = ({ className }) => {
  return (
    <section className={className}>
      <div className="container columns">
        <div className="column exp is-one-third">
          <h3 className="has-text-weight-bold is-pulled-right">Expériences</h3>
        </div>
        <div className="column experiences">
          <div>
            <h4 className="has-text-weight-bold">Freelance</h4>
            <p><span>Développeur Web</span> • Mars 2020 - Aujourd'hui</p>
          </div>
          <div>
            <h4 className="has-text-weight-bold">Syndis</h4>
            <p><span>Stagiaire développeur Angular8</span> • Août 2019 - Novembre 2019</p>
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
  .exp {
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
}
`;