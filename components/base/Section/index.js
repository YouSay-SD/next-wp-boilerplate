const Section = ({ moduleName, children, paddingOptions: {paddingTop, paddingBottom} }) => {
  return (
    <section className={`section section--${moduleName} padding ${paddingTop} ${paddingBottom}`}>
      {children}
    </section>
  )
}

export default Section;