// src/App.js (mise à jour)
import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import product from './product';

const App = () => {
  const firstName = "ibrahima"; 

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title><Name name={product.name} /></Card.Title>
          <Card.Text><Price price={product.price} /></Card.Text>
          <Card.Text><Description description={product.description} /></Card.Text>
        </Card.Body>
      </Card>
      <p>Bonjour, {firstName ? firstName : '!'}</p>
      {firstName && <img src={product.image} alt="Product" />}
    </div>
  );
}

export default App;

