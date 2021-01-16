import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Illustration from '../components/icons/Illustration';
import IconSearch from '../components/icons/IconSearch';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Healthy Food</title>
        <meta charset='utf-8' />
        <meta http-equiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height, viewport-fit=cover, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </Head>

      <main>
        <Header />
        <div className='svg-container'>
          <Illustration />
        </div>
        <section className='search'>
          <div className='search__title'>
            <h2> Ready for Trying a new recipe?</h2>
          </div>
          <div className='search__input'>
            <form>
              <input type='text' placeholder='Search Healthy Recipes' />
              <button type='submit'>
                <IconSearch />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
