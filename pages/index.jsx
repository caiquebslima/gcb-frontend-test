import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Illustration from '../components/icons/Illustration';
import IconSearch from '../components/icons/IconSearch';
import Menu from '../components/Menu';
import RecipeCard from '../components/RecipeCard';
import BlocoServices from '../components/icons/BlocoServices';

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
            name={'Broccoli Salad with bacon'}
            image={'https://placeimg.com/200/200/any/1'}
          />
          <RecipeCard
            name={'Classic Beef Burgers'}
            image={'https://placeimg.com/200/200/any/2'}
          />
        </div>
        <div className='row'>
          <RecipeCard
            name={'Classic Potato Salad'}
            image={'https://placeimg.com/200/200/any/3'}
          />
          <RecipeCard
            name={'Cherry Cobbler on the Grill'}
            image={'https://placeimg.com/200/200/any/4'}
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
      <section className='blog'>
        <div className='blog__title'>
          <h2>Read Our Blog</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vakalia and Cosonantia, there live the blind texts
          </p>
        </div>
        <div className='blog__carousel'></div>
      </section>
    </div>
  );
}
