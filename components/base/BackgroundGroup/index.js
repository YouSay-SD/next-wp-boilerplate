import { ImageWp } from "components"

const BackgroundGroup = ({ backgroundGroup: {type, backgroundImage: {image, opacityOverlay}} }) => {
  console.log('OPAC', opacityOverlay)
  const renderBackgroundImage = () => {
    return (
      <>
        <div 
          className='background-group__overlay'
          style={{opacity: `${opacityOverlay}%`}}
        />
        <ImageWp
          className='background-group__image' 
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
    <div className='background-group'>
      {type !== 'none' && renderBackground[type]()}
    </div>
  )
}

export default BackgroundGroup;
