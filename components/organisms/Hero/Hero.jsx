import Container from 'components/atoms/Container/Container';
import P from 'components/atoms/P/P';
import Title from 'components/atoms/Title/Title';
import Wysiwyg from 'components/atoms/Wysiwyg/Wysiwyg';
import BackgroundGroup from 'components/molecules/BackgroundGroup/BackgroundGroup';
import ButtonGroup from 'components/molecules/ButtonGroup/ButtonGroup';
import styles from './Hero.module.scss'

const Hero = ({ seoTitle: {title, tag}, buttonGroup, mediaGroup, backgroundGroup, type, prehead, wysiwyg }) => {
  return (
    <div className={styles.hero}>
      {backgroundGroup &&
        <BackgroundGroup backgroundGroup={backgroundGroup} />
      }
      <Container>
        <div className={styles.content}>
          <div className={styles.textSection}>
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