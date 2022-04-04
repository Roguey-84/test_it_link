import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Search from './Search';

export default function Header() {
  return (
    <header className='bg-purple'>
      <Navbar collapseOnSelect expand='lg' bg='light-op' variant='light'>
        <Container>
          <Navbar.Brand as='span' className='fs-3 fw-bold text-primary'>
            ИТ-БЛОГ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Search />
            <Nav className='ms-auto'>
              <Link href='/'>
                <a className='nav-link fs-4'>Главная</a>
              </Link>
              <Link href='/posts'>
                <a className='nav-link fs-4'>Статьи</a>
              </Link>
              <Link href='/posts/create'>
                <a className='nav-link fs-4'>Создать статью</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
