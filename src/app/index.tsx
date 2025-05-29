// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '@radix-ui/react-accordion';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/Services';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Logix Solutions - HR Consultancy</title>
        <meta name="description" content="Ultimate Human Resource Solutions for your business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="relative">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-black z-0">
          <div className="absolute right-0 top-1/4 w-2/3 h-3/4 bg-dark-green rounded-full opacity-70"></div>
        </div>
        <Hero />
      </div>
      <ServiceCards />
    </div>
  );
};

export default Home;
