import Container from "components/atoms/Container/Container";
import Wysiwyg from "components/atoms/Wysiwyg/Wysiwyg";
import Hero from "components/organisms/Hero/Hero";
import styles from './SingleLayout.module.scss'

const SingleLayout = ({ title, pageHeader, featuredImage, acf: {wysiwyg, image} }) => {
  return (
    <>
      <Hero
        seoTitle={{title, tag: 'h2'}}
        image={image}
        {...pageHeader}
      />
      <Container className={styles.container}>
        <Wysiwyg>{wysiwyg}</Wysiwyg>
      </Container>
    </>
  )
}

export default SingleLayout;