import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './app/components/header';
import {FeaturedRestaurants } from './app/screens/components/FeaturedRestaurants/FeaturedRestaurants';
import { HowDoesItWork } from './app/screens/components/HowDoesItWork/HowDoesItWork';
import { Footer } from './app/components/footer';
import { Popularitems } from './app/screens/components/PopularItems/PopularItems';
import { FlashDeals } from './app/screens/components/FlashDeals/FlashDeals';
import { HeroContiner } from './app/screens/components/HeroContiner/HeroContiner';

function App() {
  return (
    <>
      <Header />
      {<main>
        <HeroContiner />
        <FeaturedRestaurants />
        <FlashDeals />
        <Popularitems />
        <HowDoesItWork />

      </main>}
      <Footer />
    </>
  );
}

export default App;
