import { Container, Title, Wysiwyg, MediaGroup, ButtonGroup } from 'components';

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
    <div className='left-right'>
      <Container>
        <div className={`left-right__content left-right__content--${contentSide}`}>
          <div className='left-right__text-section'>
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

          <div className='left-right__media-section'>
            <MediaGroup
              mediaGroup={mediaGroup}
              mediaProps={mediaProps}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LeftRight;