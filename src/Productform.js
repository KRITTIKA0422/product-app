import "./Productform.css";
import React from "react";
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { API } from './global';

export default function Productform(){
    const validate = values => {
        const errors = {};
      
        if (!values.model) 
          errors.model = 'Field is Required';
          if (!values.company) 
          errors.company = 'Field is Required';
          if (!values.summary) 
          errors.summary = 'Field is Required';
          if (!values.img) 
          errors.img = 'Field is Required';
        return errors;
      };
     const formik=useFormik({ 
        initialValues:{model:"",company:"",summary:"",img:""},
        validate,
        onSubmit:(productDetails)=>{
            console.log("onSubmit",productDetails);
            alert(JSON.stringify(productDetails, null, 2));
            
            fetch(`${API}/products`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(productDetails),
            }).then((data)=>data.json());
        },

          });
  

    return(
        <div className="form_container">
        <h2 className="productheader">Enter New Product Details</h2>
        <form  className="product_form" onSubmit={formik.handleSubmit}>
        <TextField id="model" label="Product Name" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.model}
        name="model" />
       {formik.touched.model && formik.errors.model ? (
         <div>{formik.errors.model}</div>
       ) : null}
        <TextField id="company" label="Company Name" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.company}
        name="company" />
        {formik.touched.company && formik.errors.company ? (
         <div>{formik.errors.company}</div>
       ) : null}
         <TextField id="summary" label="Product Details" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.summary}
        name="summary" />
        {formik.touched.summary && formik.errors.summary ? (
         <div>{formik.errors.summary}</div>
       ) : null}
         <TextField id="img" label="Image URL" variant="outlined"  
        onChange={formik.handleChange} 
        value={formik.values.img}
        name="img" />
        {formik.touched.img && formik.errors.img ? (
         <div>{formik.errors.img}</div>
       ) : null}
        <Button variant="contained" type="submit">SUBMIT DETAILS</Button>
        </form>
        </div>
    );
}



