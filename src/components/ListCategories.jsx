import React, { Component } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import axios from 'axios';

export default class ListCategories extends Component {

    render() {
        return (
            <Col md={2} mt="2">
                <h4><strong>Categories</strong></h4>
                <hr />
                <ListGroup>
                    <ListGroup.Item action active>All Books</ListGroup.Item>
                    <ListGroup.Item action >Business</ListGroup.Item>
                    <ListGroup.Item action >Cook Books</ListGroup.Item>
                    <ListGroup.Item action >Mystery</ListGroup.Item>
                    <ListGroup.Item action >Accessories</ListGroup.Item>
                </ListGroup>
            </Col>
        );
    }
}