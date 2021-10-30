import Image from 'next/image';
import { loaderImage } from 'utils/loaderImage';

const ImageWp = ({ className = '', isFallback = true, image:{ sourceUrl, altText } = '', ...props}) => {
  // if the image is smaller than 40x40. Consider setting 'isFallback' to false to improve performance.
  const withFallback = {
    placeholder: 'blur',
    blurDataURL: loaderImage()
  }

  const withoutFallback = {
    placeholder: 'empty'
  };
  
  const fallbackProps = isFallback ? withFallback : withoutFallback;

  return (
    <Image
      className={`image ${className}`}
      src={sourceUrl}
      alt={altText}
      layout='responsive'
      {...fallbackProps}
      {...props}
    />
  )
}

export default ImageWp;
