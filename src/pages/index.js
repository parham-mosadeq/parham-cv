import Layout from '@/components/layouts/layout';
import Clients from '@/components/shared/Clients';
import FunFacts from '@/components/shared/FunFacts';
import Profile from '@/components/shared/Profile';
import Pricing from '@/components/shared/Pricing';
import WhatIDo from '@/components/shared/WhatIDo';
import Head from 'next/head';
const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Parham :)</title>
      </Head>
      {/* header */}
      <Profile />
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
