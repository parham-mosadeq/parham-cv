import Layout from '@/components/layouts/layout';
import Header from '@/components/shared/Header';
import WhatIDo from '@/components/shared/WhatIDo';
import React from 'react';

const HomePage = () => {
  return (
    <Layout>
      {/* header */}
      <Header />

      {/* what i do */}
      <WhatIDo />
    </Layout>
  );
};

export default HomePage;
