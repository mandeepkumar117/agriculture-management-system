import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const oraganic=()=>{
  const suggestions = [
    { 
      title: "Soil Health", 
      content: "Use compost, vermicompost, and green manure to enrich your soil naturally.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    { 
      title: "Crop Selection", 
      content: "Grow tomatoes, spinach, carrots, pulses, and millets for successful organic farming.",
      image: "https://images.unsplash.com/photo-1615484477919-9988c7724b87?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    { 
      title: "Natural Pest Control", 
      content: "Apply neem oil sprays, garlic extract, and promote natural predators like ladybugs.",
      image: "https://images.unsplash.com/photo-1590579491114-e6b5f98b8db7?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    { 
      title: "Water Management", 
      content: "Use drip irrigation and rainwater harvesting to conserve water effectively.",
      image: "https://images.unsplash.com/photo-1524593119771-1969e7cf1064?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
    },
    { 
      title: "Certification", 
      content: "Apply for organic certification after a 2-3 year transition period for better market access.",
      image: "https://images.unsplash.com/photo-1580570905584-81d19ed6c8d3?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=600"
    }
  ];

  return (
    <div style={{ backgroundColor: '#e9f7ef', minHeight: '100vh', paddingTop: '40px' }}>
      <Container>
        <h1 className="text-center text-success mb-5 fw-bold" style={{ textDecoration: 'underline wavy' }}>
          Organic Farming Guide
        </h1>
        <Row className="g-4">
          {suggestions.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm card-hover">
                <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className="text-success">{item.title}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Extra Styling for hover */}
      <style>{`
        .card-hover:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default oraganic;
