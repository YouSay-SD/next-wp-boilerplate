const Wysiwyg = ({ wysiwyg, className = '' }) => {
  return (
    <div 
      className={`wysiwyg ${className}`} 
      dangerouslySetInnerHTML={{__html: wysiwyg}} 
    />
  )
}

export default Wysiwyg;
