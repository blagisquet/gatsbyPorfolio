import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
        </div>
      </footer>
    )}
  />
)

export default Footer
