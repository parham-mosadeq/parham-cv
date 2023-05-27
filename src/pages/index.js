import Layout from '@/components/layouts/layout';
import Clients from '@/components/shared/Clients';
import FunFacts from '@/components/shared/FunFacts';
import Header from '@/components/shared/Header';
import Pricing from '@/components/shared/Pricing';
import WhatIDo from '@/components/shared/WhatIDo';
import React from 'react';

const HomePage = () => {
  return (
    <Layout>
      {/* header */}
      <Header />

      {/* what i do */}
      <WhatIDo />

      {/* clients */}
      {/* <Clients /> */}
      {/* fun facts */}
      <FunFacts />
      {/* pricing */}
      <Pricing />
    </Layout>
  );
};

export default HomePage;
