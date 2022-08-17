import Container from 'components/atoms/Container/Container';
import Title from 'components/atoms/Title/Title';
import Wysiwyg from 'components/atoms/Wysiwyg/Wysiwyg';
import ButtonGroup from 'components/molecules/ButtonGroup/ButtonGroup';
import MediaGroup from 'components/molecules/MediaGroup/MediaGroup';
import styles from './LeftRight.module.scss'

const LeftRight = ({ seoTitle: {title, tag}, prehead, wysiwyg, mediaGroup, contentSide, buttonGroup }) => {
  const mediaProps = {
    imageProps: {
      width: 1000,
      height: 600,
    },
    videoProps: {
      width: '100%',
      height: 313,
    }
  }

  return (
    <Container>
      <div className={`${styles.content} ${styles[contentSide]}`}>
        <div className={styles.textSection}>
          {prehead &&
            <span className='prehead'>{prehead}</span>
          }
          {title && 
            <Title tag={tag}>{title}</Title>
          }
          {wysiwyg &&
            <Wysiwyg>{wysiwyg}</Wysiwyg>
          }

          <ButtonGroup
            buttonGroup={buttonGroup}
            actionColor='secondary'
          />
        </div>

        <div className={styles.mediaSection}>
          <MediaGroup
            mediaGroup={mediaGroup}
            mediaProps={mediaProps}
          />
        </div>
      </div>
    </Container>
  )
}

export default LeftRight;