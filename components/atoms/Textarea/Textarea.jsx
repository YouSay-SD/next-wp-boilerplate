import styles from './Textarea.module.scss'

const Textarea = ({ name, placeholder, className = '', required = true, type = 'text', register = null, ...rest }) => {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      placeholder={placeholder}
      required={required}
      type={type}
      {...rest}
    />
  )
}

export default Textarea;