import Image from "next/image";

const SlickArrow = ({ currentSlide, slideCount, arrow = 'next', ...props }) => {
  return (
    <button
      {...props}
      className={`custom-slick-arrows slick-${arrow} slick-arrow`}
      aria-hidden="true"
      arrow="button"
    >
      <Image 
        className={`slick-arrows slick-arrows--${arrow}`} 
        src={process.env.PUBLIC_URL + '/images/icons/arrow.svg'} 
        alt={`${arrow} arrow`} 
        width={25}
        height={25}
      />
    </button>
  )
}

export default SlickArrow;