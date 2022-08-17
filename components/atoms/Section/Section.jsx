import styles from './Section.module.scss'

const Section = ({ moduleName, children, paddingOptions }) => {
  return (
    <section className={`${styles.section} section--${moduleName} ${styles[paddingOptions?.paddingTop]} ${styles[paddingOptions?.paddingBottom]}`}>
      {children}
    </section>
  )
}

export default Section;