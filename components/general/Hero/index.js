import { BackgroundGroup, ButtonGroup, Container, P, Title, Wysiwyg } from 'components'

const Hero = ({ seoTitle: {title, tag}, buttonGroup, mediaGroup, backgroundGroup, type, prehead, wysiwyg }) => {
  return (
    <div className='hero'>
      {backgroundGroup &&
        <BackgroundGroup backgroundGroup={backgroundGroup} />
      }
      <Container>
        <div className='hero__content'>
          <div className='hero__text-section'>
            {prehead &&
              <P>{prehead}</P>
            }
            {title && 
              <Title tag={tag} size='lg'>{title}</Title>
            }
            {wysiwyg &&
              <Wysiwyg>{wysiwyg}</Wysiwyg>
            }
            {buttonGroup &&
              <ButtonGroup buttonGroup={buttonGroup} />
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero;