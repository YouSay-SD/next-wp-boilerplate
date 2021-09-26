const Button = ({ children, color = 'primary', className = '' }) => {
  return (
    <button 
      className={`button button--${color} ${className}`}
    >
      { children }
    </button>
  )
}

export default Button;