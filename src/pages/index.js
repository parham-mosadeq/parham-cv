import Layout from '@/components/layouts/layout';
import Clients from '@/components/shared/Clients';
import FunFacts from '@/components/shared/FunFacts';
import Header from '@/components/shared/Header';
import Pricing from '@/components/shared/Pricing';
import WhatIDo from '@/components/shared/WhatIDo';
import Head from 'next/head';
import { useEffect } from 'react';
import { useScroll } from 'react-spring';

const HomePage = () => {
  const height = useScroll();
  console.log(height);
  return (
    <Layout>
      <Head>
        <title>Parham :)</title>
      </Head>
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
