import electronicsGoods from "../assets/data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from "./CartContext"
import "../css/ProductListing.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Footer from "../components/Footer";
const Products=()=>{
    const {addToCart}=useCart();
     const [show,setShow]=useState(false);
     
     const showAlert=()=>{
      setShow(true);
      setTimeout(()=>setShow(false),3000)
     }
    const addingToCart=(product)=>{
      addToCart(product);
      showAlert();
    }
    
   return <div>   
    {show && (
          <div className="alert-success p-4 rounded-lg shadow-lg show ">
      ✅ Product is added successfully!
    </div>
  )} 
    <div className="productPage">  
       
       {electronicsGoods.map((product,index) => (
        <Card style={{ width: '100%', height:"100%"}} key={index} className="productCard">
          <Link key={product.id} to={`/products/${product.id}`} style={{"textDecoration":"none"}}>
          <Card.Img variant="top" src={product.image} id="productImage" style={{ width:"90%",height:"250px",padding:"10px"}}/>
          <Card.Body id="cardBody">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{(product.salePrice!==" ")?
            <><span className='oldPrice'>${product.price}</span> <br/><span className="sale"> ${product.salePrice}</span></>:
            <>${product.price}<br/> </>}
            </Card.Text>

          </Card.Body>
          </Link>
          <Button variant="primary" onClick={()=>addingToCart(product)} id="addBtn">Add To Cart</Button>
        </Card>
        
      ))}
     
     </div>
    
 <div className="footerWrapper">{<Footer/>}</div>
    </div>
   
}
export default Products