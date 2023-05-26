import React from 'react';
import Title from './Title';
import Layout from '../layouts/layout';

const Clients = () => {
  const clients = ['cbc', 'royagasht', 'cbc', 'royagasht', 'cbc', 'royagasht'];

  return (
    <Layout>
      <Title title='Client' />
    </Layout>
  );
};

export default Clients;
