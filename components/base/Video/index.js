import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { ImageWp } from 'components';

// Docs: https://www.npmjs.com/package/react-player

const Video = ({ className = '', url, thumbnail , ...props }) => {
  // Icon Play
  const IconPlay = () => {
    return (
      <ImageWp
        className='video__icon-play'
        src='/img/icons/play-icon.svg'
        alt='Icon Play'
        isFallback={false}
        layout='fixed'
        height={80}
        width={80}
      />
    )
  }

  return (
    <div className={`video ${className}`}>
      <ReactPlayer
        className='video__player'
        url={url}
        light={thumbnail ? thumbnail.sourceUrl : true}
        playing={true}
        playIcon={<IconPlay />}
        {...props}
      />
    </div>
  )
}

export default Video;