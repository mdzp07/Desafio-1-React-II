import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function Navegacion() {
  return (
    <>
      <Navbar bg="danger" variant='dark'>
        <Container className='d-flex justify-content-between'>
          <div><Navbar.Brand href="/" className='formato-titulo'> 🍰 Happy Cake</Navbar.Brand></div>
          <div>
            <Nav className='links'>
              <Nav.Link href="/contacto">✉️ Contacto</Nav.Link>
              <Nav.Link href="/productos">🧁 Productos</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;