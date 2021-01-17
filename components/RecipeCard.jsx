import Comida1 from '../components/icons/Comida1';
import Comida2 from '../components/icons/Comida2';
import Comida3 from '../components/icons/Comida3';
import Comida4 from '../components/icons/Comida4';
import React from 'react';
import Image from 'next/image';

export default function RecipeCard() {
  return (
    <React.Fragment>
      <div className='row'>
        <div className='card-container col-sm-6 m-lg-0 mt-3'>
          <div className='card '>
            <div className='card__image'>
              <Comida1 />
            </div>
            <div className='card__info'>
              <h3 className='card__info--title'>Broccoli Salad with Bacon</h3>
              <button>See Recipe</button>
            </div>
          </div>
        </div>
        <div className='card-container col-sm-6 m-lg-0 mt-3'>
          <div className='card '>
            <div className='card__image'>
              <Image src='/comida_2.svg' alt='me' width={253} height={225} />
            </div>
            <div className='card__info'>
              <h3 className='card__info--title'>Classic Beef Burgers</h3>
              <button>See Recipe</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='card-container col-sm-6 m-lg-0 mt-3'>
          <div className='card '>
            <div className='card__image'>
              <Image src='/comida_3.svg' alt='me' width={253} height={225} />
            </div>
            <div className='card__info'>
              <h3 className='card__info--title'>Classic Potato Salad</h3>
              <button>See Recipe</button>
            </div>
          </div>
        </div>
        <div className='card-container col-sm-6 m-lg-0 mt-3'>
          <div className='card '>
            <div className='card__image'>
              <Image src='/comida_4.svg' alt='me' width={253} height={225} />
            </div>
            <div className='card__info'>
              <h3 className='card__info--title'>Cherry Cobbler on the Grill</h3>
              <button>See Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
