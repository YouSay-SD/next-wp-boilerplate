import ReactPlayer from 'react-player';
import { ImageWp } from 'components';

const MediaGroup = ({ mediaGroup: {mediaType, image, video}, mediaProps: {imageProps, videoProps} }) => {
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
        <ReactPlayer
          className='media-group__video'
          url={video}
          controls
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