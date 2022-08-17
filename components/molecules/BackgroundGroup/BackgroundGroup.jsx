import ImageWp from 'components/atoms/ImageWp/ImageWp'
import styles from './BackgroundGroup.module.scss'

const BackgroundGroup = ({ backgroundGroup: {type, backgroundImage: {image, opacityOverlay}} }) => {
  const renderBackgroundImage = () => {
    return (
      <>
        <div 
          className={styles.overlay}
          style={{opacity: `${opacityOverlay}%`}}
        />
        <ImageWp
          layout="fill"
          objectFit="cover"
          image={image}
        /> 
      </>
    )
  }

  const renderBackground = {
    image: renderBackgroundImage,
  }

  return (
    <div className={styles.backgroundGroup}>
      {type !== 'none' && renderBackground[type]()}
    </div>
  )
}

export default BackgroundGroup;
