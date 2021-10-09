import { Container, Heading, Slick, ImageWp } from 'components';

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
            {gallery.map(( image ) => {
              return (
                <ImageWp
                  key={image.databaseId} 
                  image={image}
                  layout="fill"
                  objectFit="cover"
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