import ImageWp from 'components/atoms/ImageWp/ImageWp'
import Video from 'components/atoms/Video/Video'
import styles from './MediaGroup.module.scss'

const MediaGroup = ({ mediaGroup: {mediaType, image, video, videoThumbnail}, mediaProps: {imageProps, videoProps} }) => {
  const renderImage = () => {
    if (image) {
      return (
        <ImageWp
          objectFit="cover"
          image={image}
          {...imageProps}
        />
      )
    }
  }

  const renderVideo = () => {
    if (video) {
      return (
        <Video
          thumbnail={videoThumbnail}
          url={video}
          {...videoProps}
        />
      )
    }
  }

  const renderMedia = {
    image: renderImage,
    video: renderVideo,
  }

  return (
    <div className={styles.mediaGroup}>
      {renderMedia[mediaType]()}
    </div>
  )
}

export default MediaGroup;