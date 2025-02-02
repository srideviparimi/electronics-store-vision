import { Link, useParams } from "react-router-dom"
import {useCart} from "./CartContext";
import electronicsGoods from "../assets/data";
import Button from "react-bootstrap/esm/Button";
import "../css/ProductPage.css";
import {Row,Col,Card} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import StarRatings from "react-star-ratings";
import { useState } from "react";
import Footer from "../components/Footer";
//import {Container} from "react-bootstrap";
//import  Link from "react-router-dom";
const ProductPage=()=>{
    const {id}=useParams();
    const {addToCart}=useCart();
    const selectedProduct=electronicsGoods.find((item)=>id===item.id);
    const sentences=selectedProduct.description.split(".").filter((sentence)=>sentence.trim()!=="");
    const [show,setShow]=useState(false);
    const showAlert=()=>{
    setShow(true);
    setTimeout(()=>setShow(false),3000)
    }
    const addingToCart=(product)=>{
        addToCart(product);
        showAlert();
    }
    return <div className="descriptionPage">
        {show && (
          <div className="alert-success p-4 rounded-lg shadow-lg show ">
      ✅ Product is added successfully!
        </div>
         )} 
    
    <div className="productDiv .container" style={{width:"100%"}}>
           
           <Row className="align-items-top mt">
                <Col md={6} className="imageDiv">
                    <Image src={`.${selectedProduct.image}`} rounded id="productImage"/>
                </Col>
                <Col md={6}>
                    <Card className="cardDiv">
                        <Card.Body>
                            <Card.Title className="cardTitle">{selectedProduct.title}</Card.Title><br/>
                            <Card.Subtitle><strong>Ratings</strong> {selectedProduct.rating}
                                <StarRatings rating={selectedProduct.rating}
                                starRatedColor="orange"
                                starEmptyColor="gray"
                                starDimension="20px"
                                starSpacing="1px"/>
                            </Card.Subtitle>
                            
                            <Card.Text className="displayPrice"> 
                                {
                                    selectedProduct.salePrice ===" "? 
                                    <span>${selectedProduct.price}</span>:  
                                    <span><span className="price">${selectedProduct.price}<br/></span><span className="salePrice">${selectedProduct.salePrice}</span></span>
                                }
                            </Card.Text>
                            <Button variant="primary" onClick={()=>addingToCart(selectedProduct)} id="addBtn">Add To Cart</Button><br/>
                            <Card.Text>
                                <strong>Description:</strong><br/>
                                <ul>
                                    {sentences.map((sentence,index)=>
                                        <li key={index}>{sentence.trim()}</li>
                                    )}
                                </ul>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
    </div>
    
 <div className="footerWrapper">{<Footer className="actualFooter"/>}</div>
</div>

}
export default ProductPage