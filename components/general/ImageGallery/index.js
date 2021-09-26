import Image from 'next/image';
import { Container, Heading, Slick } from 'components';
import { loaderImage } from 'utils/loaderImage';

const ImageGallery = ({ seoTitle, gallery, wysiwyg }) => {
  return (
    <div className='image-gallery'>
      <Container>
        <Heading
          seoTitle={seoTitle}
          wysiwyg={wysiwyg}
          className='image-gallery__heading'
        />

        {gallery &&
          <Slick className='image-gallery__slick'>
            {gallery.map(({ databaseId, sourceUrl, srcSet, altText }) => {
              return (
                <Image
                  key={databaseId} 
                  src={sourceUrl}
                  srcSet={srcSet} 
                  alt={altText} 
                  layout="fill"
                  objectFit="cover"
                  placeholder='blur'
                  blurDataURL={loaderImage()}
                />
              )
            })}
          </Slick>
        }
      </Container>
    </div>
  )
}

export default ImageGallery;