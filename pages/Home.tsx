
import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { WhyUs } from '../components/WhyUs';
import { CTA } from '../components/CTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <CTA />
    </>
  );
};
