const P = ({ children, className = '' }) => {
  return (
    <p className={`p ${className}`}>
      {children}
    </p>
  )
}

export default P;
