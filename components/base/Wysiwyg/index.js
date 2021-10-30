const Wysiwyg = ({ children, className = '' }) => {
  return (
    <div 
      className={`wysiwyg ${className}`} 
      dangerouslySetInnerHTML={{__html: children}} 
    />
  )
}

export default Wysiwyg;
