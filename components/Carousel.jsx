import CarouselCard from './CarouselCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CustomArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'fff',
        color: 'badc58',
      }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };
  return (
    <div className='carousel '>
      <Slider {...settings}>
        <CarouselCard image={'/blog_image_1.svg'} name={'Kevin Ibrahim'} />
        <CarouselCard image={'/bloco_image_2.svg'} name={'Mike Jackson'} />
        <CarouselCard image={'/bloco_image_3.svg'} name={'Bryan McGregor'} />
        <CarouselCard image={'/bloco_image_4.svg'} name={'Jason Mraz'} />
      </Slider>
    </div>
  );
}
