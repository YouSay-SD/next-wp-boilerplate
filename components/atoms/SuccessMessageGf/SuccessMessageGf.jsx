// Working In Progress
import styles from './SuccessMessageGf.module.scss'

const SuccessMessageGf = ({ className = '', children }) => {
  return (
    <div className={`${styles.successMessageGf} ${className}`}>
      {children}
    </div>
  )
}

export default SuccessMessageGf;