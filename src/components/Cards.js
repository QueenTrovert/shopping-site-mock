import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = ({ title, image, price }) => {
    return (
      <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem', margin: '10px'}}>
        <Card.Img variant="top" src={image} style={{height: '16rem'}}/>
        <Card.Body>
          <Card.Text className="text-truncate">{title}</Card.Text>
          <Card.Title style={{color: '#f57224'}}>₱{price}</Card.Title>
        </Card.Body>
        </Card>
      </div>

    )
};

export default Cards;