import React from 'react';
import { Col, Card, Button, Container } from 'react-bootstrap';

function Books({ book, cartIn }) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const temp = book.type;
    const temp1 = capitalizeFirstLetter(temp)

    return (
        <Col md={4} xs={6} className="mb-4">
            <Card className="bookCard shadow">
                <Container className="imgContainer">
                    <img src={book.img} className="img-fluid" alt="Responsive image" />
                </Container>
                <Card.Body>
                    <Card.Title className="title"><strong>{book.name}</strong></Card.Title>
                    <Card.Text className="author">Author: <strong>{book.author}</strong></Card.Text>
                    <Card.Text className="bookType">Type: <strong>{temp1}</strong></Card.Text>
                    <Card.Text className="desc">{book.description}</Card.Text>
                    <Container className="priceContainer">
                        <h5><strong>${book.price}</strong></h5>
                    </Container>
                    <Container className="cartBtnContainer">
                        <Button onClick={() => cartIn(book)}  variant="primary">Add to Cart</Button>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Books;
