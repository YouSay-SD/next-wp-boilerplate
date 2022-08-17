import styles from './Title.module.scss'

const Title = ({ children, size = 'md', className = '', tag = 'h2', }) => {
  const Tag = `${tag}`;

  return (
    <div className={`${styles.title} ${className}`}>
      <Tag className={`${styles.tag} ${styles[size]}`}>{children}</Tag>
    </div>
  )
}

export default Title;