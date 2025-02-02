import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"
const Navbar=()=>{

    return <div>
    <Nav justify variant="tabs" defaultActiveKey="/home" className='nav'>
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
        <Link to="/checkout" className='title'>Checkout</Link>
      </Nav.Item>
    </Nav>
    </div>
}
export default Navbar