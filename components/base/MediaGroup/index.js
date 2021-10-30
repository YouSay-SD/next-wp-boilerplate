import { ImageWp, Video } from 'components';

const MediaGroup = ({ mediaGroup: {mediaType, image, video, videoThumbnail}, mediaProps: {imageProps, videoProps} }) => {
  const renderImage = () => {
    if (image) {
      return (
        <ImageWp
          className='media-group__image'
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
          className='media-group__video'
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
    <div className='media-group'>
      {renderMedia[mediaType]()}
    </div>
  )
}

export default MediaGroup;