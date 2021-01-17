import Image from 'next/image';

export default function RecipeCard({ image, title }) {
  return (
    <div className='card-container col-sm-6 m-lg-0 mt-3'>
      <div className='card '>
        <div className='card__image'>
          <Image src={image} alt='me' width={253} height={225} />
        </div>
        <div className='card__info'>
          <h3 className='card__info--title'>{title}</h3>
          <button>See Recipe</button>
        </div>
      </div>
    </div>
  );
}
