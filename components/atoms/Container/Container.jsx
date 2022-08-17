import styles from './Container.module.scss'

const Container = ({ children, className = '', size = 'default' }) => {
  return (
    <div className={`${styles.container} ${className} ${styles[size]}`}>
      {children}
    </div>
  )
}

export default Container;