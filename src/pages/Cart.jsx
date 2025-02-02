import React, { useState,useEffect } from 'react';
import { useCart } from './CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../css/Cart.css";
import Footer from '../components/Footer';
import {Col, Row, Container} from "react-bootstrap";
function Cart() {
  const { cart,addToCart, removeFromCart, clearCart ,reduceQuantity} = useCart();
  const [total,setTotal]=useState(0);
  const calculate=()=>{
    const total=cart.reduce((sum,item)=>{ 
      const pri=item.salePrice===" "?Number(item.price):Number(item.salePrice)
      return sum+pri*item.quantity},0);
   setTotal(total);
  }

  useEffect(()=>{
    calculate();
  },[cart])
  
 
  return (
    <Container fluid>
      <Row  className="g-4">
      
      {cart.length === 0 ? (
        <h1 id="empty">Your Cart is empty.</h1>
      ) : (
        cart.map((item)=>(
          <Col >
            <Card key={item.id} className='cartName'>
              <Card.Body className='cartBody'>
               <Card.Img variant="left" src={item.image} alt={item?.title}className="cartImage"/>
                <Card.Title className="cartTitle">{item.title} </Card.Title>
                <Card.Text className='cartPrice'>{(item.salePrice!==" ")?
                  <span><span className='oldPrice'>${item.price}</span> <br/><span className="sale"> ${item.salePrice}</span></span>:
                  <span><strong>Price:</strong> ${item.price}<br/></span> }<br/>
                  <span><strong>Quantity:</strong>
                  <Button style={{backgroundColor:" #4DA8DA",border:"none", borderRadius:"20px"}} onClick={()=>reduceQuantity(item)}>-</Button>
                  &nbsp;{item.quantity}&nbsp;
                  <Button style={{backgroundColor:" #4DA8DA",border:"none", borderRadius:"20px"}} onClick={() => addToCart(item)}>+</Button></span></Card.Text>
                <Button variant="primary"  onClick={() => removeFromCart(item.id)} id='removeBtn'>Remove</Button>
              </Card.Body>
            </Card> 
            </Col> 
        ))  
      )}
      </Row>
      <div style={{textAlign:"right",margin:"5% 10% 5% 0"}}>
     {cart.length>0 &&<h4 style={{ }}>Total Price: ${total}</h4>}
      <br/><br/>
      { cart.length>0 && <Link to="/checkout"><Button variant="primary" > Go to Checkout</Button></Link>}
      {cart.length > 0 && <Button style={{marginLeft:"2%"}}variant="primary" onClick={()=>clearCart}>Clear Cart</Button>}
      </div>
      <div className="footerDiv"> <Footer/></div>
    </Container>
  );
}

export default Cart;
