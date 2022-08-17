import styles from './Wysiwyg.module.scss'

const Wysiwyg = ({ children, className = '' }) => {
  return (
    <div 
      className={`${styles.wysiwyg} ${className}`} 
      dangerouslySetInnerHTML={{__html: children}} 
    />
  )
}

export default Wysiwyg;
