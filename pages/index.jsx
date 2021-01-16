import React from 'react';
import Header from '../components/Header';
import Illustration from '../components/icons/Illustration';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='svg-container'>
        <Illustration />
      </div>
    </main>
  );
}
