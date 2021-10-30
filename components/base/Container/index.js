const Container = ({ children, className = '', size = 'default' }) => {
  return (
    <div className={`container ${className} container--${size}`}>
      {children}
    </div>
  )
}

export default Container;