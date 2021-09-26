const SuccessMessageGf = ({ className = '', children }) => {
  return (
    <div className={`success-message-gf ${className}`}>
      {children}
    </div>
  )
}

export default SuccessMessageGf;