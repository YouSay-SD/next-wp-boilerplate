import Container from 'components/atoms/Container/Container';
import Navbar from 'components/molecules/Navbar/Navbar';
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Navbar />
      </Container>
    </footer>
  )
}

export default Footer;