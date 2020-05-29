import React from 'react';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <h1>Oups</h1>
    <p>Il semblerait que cette page n'existe pas encore...</p>
    <a href="#accueil">Retourner sur le site</a>
  </Layout>
)

export default NotFoundPage;
