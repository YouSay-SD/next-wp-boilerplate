import Image from 'next/image';
import { loaderImage } from 'utils/loaderImage';

const ImageWp = ({ className = '', image:{ sourceUrl, altText }, ...props}) => {
  return (
    <Image
      className={`image ${className}`}
      src={sourceUrl}
      alt={altText}
      placeholder='blur'
      blurDataURL={loaderImage()}
      layout='responsive'
      {...props}
    />
  )
}

export default ImageWp;
