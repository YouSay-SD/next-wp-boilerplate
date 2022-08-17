import Slider from 'react-slick';

const Slick = ({ children, className = '' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // prevArrow: <SlickArrow arrow='prev' />,
    // nextArrow: <SlickArrow arrow='next' />,
  };

  return (
    <Slider 
      className={`slick ${className}`} 
      {...settings}
    >
      {children}
    </Slider>
  )
}

export default Slick;