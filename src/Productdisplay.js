import React from 'react';
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./global";
import { Button } from "@mui/material";
import "./Productdisplay.css";

export default function Productdisplay() {

   const[products,setProducts]=useState([]);
   const getProducts= ()=>{
    fetch(`${API}/products`,{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((p)=>setProducts (p));
  };
   useEffect(()=> getProducts(),[]);

   const deleteproduct=(id)=>{
  fetch(`${API}/products/${id}`,{
      method:'DELETE',
  }).then((data)=>data.json())
  .then(()=>getProducts());
   };
   return (
    <div className="product-list-container">{products.map((p)=>(<Mobile product ={p} deleteButton={<Button variant="contained" color="error" onClick={()=>deleteproduct(p.id)}><i className="material-icons">delete</i></Button>}/>))}</div>
 );
 }

function Mobile({product,deleteButton}){
  
  const [show,setShow]= useState(true);
return(
  <div className="product-container">
    <img src={product.img} alt={product.model} className="product-poster"></img>
    <div className="product-specs"><h2 className="product-name">{product.model}</h2>
    <p  className="product-company">{product.company}</p></div>
    <Button variant="contained" onClick={()=>setShow(!show)}>Description</Button>
    {deleteButton}
    {show?<p className="product-summary">{product.summary}</p>:""}  
  </div>
);
}


