import { Container, Hero, Wysiwyg } from 'components';

const SingleLayout = ({ title, featuredImage, acf: {wysiwyg, image} }) => {
  return (
    <div className='single-layout'>
      <Hero
        title={title}
        image={image}
      />
      <Container>
        <div className='single-layout__content'>
          <Wysiwyg>{wysiwyg}</Wysiwyg>
        </div>
      </Container>
    </div>
  )
}

export default SingleLayout;