import ContentLoader from "react-content-loader";

const CardLoader = ({ props }) => {
  return (
    <ContentLoader 
      speed={2}
      width='100%'
      height={431}
      viewBox="0 0 400 460"
      backgroundColor="#333"
      foregroundColor="#222"
      {...props}
    >
      <rect x="-9" y="314" rx="2" ry="2" width="415" height="31" /> 
      <rect x="-1" y="-2" rx="2" ry="2" width="400" height="308" /> 
      <rect x="35" y="472" rx="2" ry="2" width="140" height="10" /> 
      <rect x="-18" y="354" rx="0" ry="0" width="533" height="132" />
    </ContentLoader>
  )
}

export default CardLoader;