import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Oraganic=()=>{
  const [organicdata,setOrganicdata]=useState({
    product_id:'',
    name:'',
    fertilizer_type:'',
    nutrients:'',
    image:'',
    usage:'',
    application_method:'',
    dosage:'',
    benifits:'',
    precautions:'',
    suitablecrop:'',
    manufacturer:'',
    price:'',
    stotaginstructions:'',
    dealer:''
  });
  const [errors,setErrors]=useState({});
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    setOrganicdata({
      ...organicdata,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
  }
  return (
    <>
    hii
    </>
  );
}

export default Oraganic;
