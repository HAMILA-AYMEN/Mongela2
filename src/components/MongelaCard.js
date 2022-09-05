import React from 'react';
import Card from 'react-bootstrap/Card';
import  { useCart } from 'react-use-cart'
import Button from "react-bootstrap/Button";


function MongelaCard({mongela}) {
 
const {addItem}=useCart();
  
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img id='img' variant="top" src={mongela.img}  />
      <Card.Body>
        <Card.Title >{mongela.title}</Card.Title>
        <Card.Text>{mongela.desc}</Card.Text>
        <Card.Text>${mongela.price}</Card.Text>
        <Button variant="primary" onClick={()=>addItem(mongela)}>AJOUTER AU PANIER</Button>
       
       
        
      

        
        
      </Card.Body>
      
    </Card>
    
  );
}

export default MongelaCard;