import { motion } from 'framer-motion';
import { Header, Main, Footer } from 'components';

const Layout = ({ children, className }) => {
  return (
    <div className={`layout ${className}`}>
      <Header />

      {/* Page Transition */}
      <motion.div
        animate='layoutAnimate'
        initial='layoutInitial'
        exit='layoutExit'
        variants={{
          layoutInitial: {
            opacity: 0
          },
          layoutAnimate: {
            opacity: 1,
            transform: 'scale(1)'
          },
          layoutExit: {
            opacity: 0,
            transform: 'scale(.9)'
          }
        }}
      >
        <Main>          
          {children}
        </Main>
        <Footer />
      </motion.div>
    </div>
  )
}

export default Layout;