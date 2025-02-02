import "../css/Checkout.css"
import React from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from './CartContext';
import { useState,useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Checkout=()=>{
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        const btn=document.getElementById("proceedToPayBtn");
        if(total===0)
            return
       
        btn.disabled=false;
        console.log(data);
        
      };
       const [total,setTotal]=useState(0);
       const { cart} = useCart();
        const calculate=()=>{
          const total=cart.reduce((sum,item)=>{ 
            const pri=item.salePrice===" "?Number(item.price):Number(item.salePrice)
            return sum+pri*item.quantity},0);
         setTotal(total);
        }
      
        useEffect(()=>{
          calculate();
        },[cart])
        const payment=()=>{
            console.log("in payment page")
        }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                        <span className="text-danger text-center">All fields are required *</span> 
                            <input className="col-md-6" type="text" placeholder="First name" name="firstName" {...register("First name", {required: true, maxLength: 80,message:"firstName is required"})} /> 
                            <input className="col-md-6" type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
                            <input className="col-md-12" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                            <input className="col-md-12"type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
                            <textarea className="col-md-12" placeholder="Address" {...register("Address",{required:true})} />
                            <input className="col-md-4" placeholder="City"{...register("City",{required:true})}/>
                            <input className="col-md-4" placeholder="State" {...register("State",{required:true})} />
                            <input className="col-md-4" placeholder="Post Code" {...register("Post Code",{required:true, minLength:4,maxLength:4})}/>
                            <div className="col-md-11 w-3 d-flex justify-content-center"><input type="submit" id="submitButton" value="Place Order"/></div>
                            
                        </div>
                       
                    </form>
                   
                </div>
                <div className="col-md-5"> 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item)=>
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.salePrice===" ")? (item.price):(item.salePrice)}</td>
                                
                            </tr>
                            )}
                        </tbody>
                        <thead>
                            <tr>
                                <th colSpan={2}>Grand Total</th>
                                <th>${total}</th>
                            </tr>
                        </thead>
                    </table>
                    <Link to="/checkout/payment_success"><button type="button" className="btn btn-primary" id="proceedToPayBtn" disabled onClick={()=>payment()}>Proceed to Pay</button></Link>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
}
export default Checkout 