import { Container, ImageWp, Navbar } from 'components';

const Header = ({ acf: {header} }) => {
  return (
    <header className='header'>
      <Container 
        className='header__container'
        size='large'
      >
        <div className='header__logo'>
          <ImageWp
            image={header.image}
            isFallback={false}
            width='100%'
            height='30%'
            objectFit='contain'
          />
        </div>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header;