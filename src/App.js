import "./App.css";
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./global";


// App - component
 function App() {

   const[products,setProducts]=useState([]);
   useEffect(()=>{
     fetch(`${API}/products`)
     .then((data)=>data.json())
     .then((p)=>setProducts (p));
   },[]);
   console.log (products);
   return (
     <div className="App">
    <div className="product-list-container">{products.map((p)=>(<Mobile product ={p}/>))}</div>
     </div>
 );
 }

function Mobile({product}){
  
  const [show,setShow]= useState(true);
return(
  <div className="product-container">
    <img src={product.img} alt={product.model} className="product-poster"></img>
    <div className="product-specs"><h2 className="product-name">{product.model}</h2>
    <p  className="product-company">{product.company}</p></div>
    <button onClick={()=>setShow(!show)}>Description</button>
    {show?<p className="product-summary">{product.summary}</p>:""}   
  </div>
);
}

export default App;

