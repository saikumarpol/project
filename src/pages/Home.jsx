import React from 'react';
import SingleCard from '../components/SingleCard';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter p-10 bg-black text-gray-900 transition-colors duration-300">
      <SingleCard />
    </div>
  );
};

export default Home;