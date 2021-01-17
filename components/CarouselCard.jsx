import Image from 'next/image';

export default function CarouselCard({ image, name }) {
  return (
    <div className='carousel__item'>
      <div className='image-container'>
        <Image src={image} alt='me' width={340} height={235} />
      </div>
      <div className='text-container'>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div className='user'>
          <span className='avatar-container'>
            <img src='https://placeimg.com/40/40/any/12' alt='' />
          </span>
          <span className='user__name'>{name}</span>
        </div>
      </div>
    </div>
  );
}
