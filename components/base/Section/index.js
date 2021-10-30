const Section = ({ moduleName, children, paddingOptions }) => {
  return (
    <section className={`section section--${moduleName} padding ${paddingOptions?.paddingTop} ${paddingOptions?.paddingBottom}`}>
      {children}
    </section>
  )
}

export default Section;