import React from 'react';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';


const Experiences = ({ className }) => {
  return (
    <section className={className}>
      <div className="container columns">
        <div className="column exp is-one-third">
          <h4 className="title is-pulled-right">Expériences</h4>
        </div>
        <div className="column experiences">
          <div>
            <h5 className="subtitle has-text-weight-bold">Freelance</h5>
            <p><span>Développeur Web</span> • Mars 2020 - Aujourd'hui</p>
          </div>
          <div>
            <h5 className="subtitle has-text-weight-bold">Syndis</h5>
            <p><span>Stagiaire développeur Angular8</span> • Août 2019 - Novembre 2019</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default styled(Experiences)`
  h4 {
    text-decoration: underline ${colors.primary};
  }
  span {
    font-style: italic;
  }
  .exp {
    margin-right: 2.8rem;
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