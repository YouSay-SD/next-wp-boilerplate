import Image from 'next/image';
import { Container, Title } from 'components'

const Hero = ({ title, image }) => {
  return (
    <div className='hero'>
      <Image
        className='hero__img' 
        layout="fill"
        objectFit="cover"
        src={image.sourceUrl}
        srcSet={image.srcSet} 
        alt={image.altText} 
      />
      <Container>
        <Title 
          className='hero__title'
        >
          {title}
        </Title>
      </Container>
    </div>
  )
}

export default Hero;