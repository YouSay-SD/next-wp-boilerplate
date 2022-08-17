import Main from 'components/atoms/Main/Main';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import { motion } from 'framer-motion';
import styles from './Layout.module.scss'

const Layout = ({ children, className, themeSetting: {acfOptionsHeader} }) => {
  return (
    <div className={`layout ${className}`}>
      <Header
        acf={acfOptionsHeader}
      />

      {/* Page Transition */}
      <div className={styles.container}>
        <motion.div
          transition={{ type: "spring", duration: 0.8 }}
          animate='layoutAnimate'
          initial='layoutInitial'
          exit='layoutExit'
          variants={{
            layoutInitial: {
              opacity: 0,
              transform: 'translateX(-100px)'
            },
            layoutAnimate: {
              opacity: 1,
              transform: 'translateX(0px)'
            },
            layoutExit: {
              opacity: 0,
              transform: 'translateX(100px)'
            }
          }}
        >
          <Main>          
            {children}
          </Main>
          <Footer />
        </motion.div>
      </div>
    </div>
  )
}

export default Layout;