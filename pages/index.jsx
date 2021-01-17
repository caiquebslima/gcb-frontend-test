import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Illustration from '../components/icons/Illustration';
import IconSearch from '../components/icons/IconSearch';
import Menu from '../components/Menu';
import RecipeCard from '../components/RecipeCard';
import BlocoServices from '../components/icons/BlocoServices';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Healthy Food</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height, viewport-fit=cover, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
        />
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
      <section className='best-recipes container'>
        <div className='best-recipes__title'>
          <h2>Our Best Recipes</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vakalia and Cosonantia, there live the blind texts
          </p>
        </div>
        <div className='row'>
          <RecipeCard
            image={'/comida_1.svg'}
            title={'Broccoli Salad with Bacon'}
          />
          <RecipeCard image={'/comida_2.svg'} title={'Classic Beef Burgers'} />
        </div>
        <div className='row'>
          <RecipeCard image={'/comida_3.svg'} title={'Classic Potato Salad'} />
          <RecipeCard
            image={'/comida_4.svg'}
            title={'Cherry Cobbler on the Grill'}
          />
        </div>
      </section>
      <section className='know-more'>
        <div className='svg-container'>
          <BlocoServices />
        </div>
        <div className='know-more__text'>
          <h2>The best services ready to serve you</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            commodi. Aut, placeat omnis deserunt sed delectus nobis. Aliquid,
            necessitatibus. Placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            voluptates!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
            nisi.
          </p>

          <button>Know More</button>
        </div>
      </section>
      <section className='blog container'>
        <div className='blog__title'>
          <h2>Read Our Blog</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vakalia and Cosonantia, there live the blind texts
          </p>
        </div>
        <div className='blog__carousel'>
          <Carousel />
        </div>
      </section>
    </div>
  );
}
