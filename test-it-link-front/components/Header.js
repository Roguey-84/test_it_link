import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand='lg' bg='purple' variant='dark'>
        <Container>
          <Navbar.Brand as='span'>ИТ-Блог</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Link href='/'>
                <a className='nav-link'>Главная</a>
              </Link>
              <Link href='/posts'>
                <a className='nav-link'>Статьи</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
