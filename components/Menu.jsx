import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className={`d-lg-none menu__hamburger hamburger hamburger--collapse ${
          isMenuOpen ? ' is-active' : ''
        }`}
        type='button'
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
      <section className={`menu ${isMenuOpen ? 'is-active' : ''}`}>
        <nav>
          <ul className='menu__list'>
            <li className='menu__list--item'>
              <a>HEALTHY RECIPES</a>
            </li>
            <li className='menu__list--item'>
              <a>BLOG</a>
            </li>
            <li className='menu__list--item'>
              <a>JOIN</a>
            </li>

            <li className='menu__list--item'>
              <button>
                <Link href='/register'>
                  <a>REGISTER</a>
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
