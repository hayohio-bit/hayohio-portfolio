import React from 'react';
import Hero from '@pages/Home/components/Hero';
import WorkSection from '@components/portfolio/WorkSection/WorkSection';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <WorkSection />
    </div>
  );
}
