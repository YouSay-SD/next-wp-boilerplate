import styles from './Input.module.scss'

const Input = ({ placeholder, className = '', required = true, type = 'text', ...rest}) => {
  return (
    <input
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      // required={required}
      type={type}
      {...rest}
    />
  )
}

export default Input;