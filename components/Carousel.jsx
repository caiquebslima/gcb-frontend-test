import CarouselCard from './CarouselCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const settings = {
    className: 'slider variable-width',
    dots: false,

    slidesToShow: 4,
    variableWidth: true,
    slidesToScroll: 1,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1840,
        settings: {
          centerPadding: '360px',
        },
      },
      {
        breakpoint: 1650,
        settings: {
          centerPadding: '260px',
        },
      },
      {
        breakpoint: 1460,
        settings: {
          centerPadding: '160px',
        },
      },
      {
        breakpoint: 1367,
        settings: {
          centerPadding: '180px',
        },
      },
      {
        breakpoint: 1260,
        settings: {
          centerPadding: '120px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '0px',
        },
      },
    ],
  };
  return (
    <div className='carousel '>
      <Slider {...settings}>
        <CarouselCard
          image={'https://placeimg.com/350/250/any/1'}
          name={'Kevin Ibrahim'}
        />
        <CarouselCard
          image={'https://placeimg.com/350/250/any/2'}
          name={'Kevin Ibrahim'}
        />
        <CarouselCard
          image={'https://placeimg.com/350/250/any/3'}
          name={'Kevin Ibrahim'}
        />
        <CarouselCard
          image={'https://placeimg.com/350/250/any/4'}
          name={'Kevin Ibrahim'}
        />
        <CarouselCard
          image={'https://placeimg.com/350/250/any/5'}
          name={'Kevin Ibrahim'}
        />
        <CarouselCard
          image={'https://placeimg.com/350/250/any/6'}
          name={'Kevin Ibrahim'}
        />
      </Slider>
    </div>
  );
}
