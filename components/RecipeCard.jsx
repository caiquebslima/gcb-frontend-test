export default function RecipeCard({ name, image }) {
  return (
    <div className='card-container col-sm-6 m-lg-0 mt-3'>
      <div className='card '>
        <div className='card__image'>
          <img src={image} alt='' />
        </div>
        <div className='card__info'>
          <h3 className='card__info--title'>{name}</h3>
          <button>See Recipe</button>
        </div>
      </div>
    </div>
  );
}