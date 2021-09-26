const Input = ({ placeholder, className = '', required = true, type = 'text', ...rest}) => {
  return (
    <input
      placeholder={placeholder}
      className={`input ${className}`}
      // required={required}
      type={type}
      {...rest}
    />
  )
}

export default Input;