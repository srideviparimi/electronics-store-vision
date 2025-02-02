import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import "../css/Navbar.css"
const Navigationbar=()=>{

    return <div>   <Navbar expand="lg" >
      <Container fluid>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Collapse id="offcanvasNavbar">
    <Nav justify variant="tabs" defaultActiveKey="/home" className='nav ms-auto'>
    
      <Nav.Item>
        <Link to="/" className='pageName'>Home</Link>
      </Nav.Item>
      <Nav.Item>
       <Link  to="/products"className='pageName' >Products</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/cart" className='pageName'>Cart</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/checkout" className='pageName'>Checkout</Link>
      </Nav.Item>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
}
export default Navigationbar