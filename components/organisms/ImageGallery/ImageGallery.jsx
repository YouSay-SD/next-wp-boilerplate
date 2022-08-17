import Container from 'components/atoms/Container/Container';
import Heading from 'components/atoms/Heading/Heading';
import ImageWp from 'components/atoms/ImageWp/ImageWp';
import Slick from 'components/molecules/Slick/Slick';
import styles from './ImageGallery.module.scss'

const ImageGallery = ({ seoTitle, gallery, wysiwyg, description }) => {
  return (
    <Container>
      <Heading
        seoTitle={seoTitle}
        wysiwyg={wysiwyg}
        description={description}
        className={styles.heading}
      />

      {gallery &&
        <Slick>
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
  )
}

export default ImageGallery;