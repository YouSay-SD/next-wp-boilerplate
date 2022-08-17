import Container from 'components/atoms/Container/Container';
import ImageWp from 'components/atoms/ImageWp/ImageWp';
import Navbar from 'components/molecules/Navbar/Navbar';
import Link from 'next/link';
import styles from './Header.module.scss'

const Header = ({ acf: {header} }) => {
  return (
    <header className={styles.header}>
      <Container
        className={styles.container}
        size='large'
      >
        <div className={styles.logo}>
          {header?.image &&
            <Link href='/'>
              <a>
                <ImageWp
                  image={header.image}
                  isFallback={false}
                  width='100%'
                  height='30%'
                  objectFit='contain'
                />
              </a>
            </Link>
          }
        </div>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header;