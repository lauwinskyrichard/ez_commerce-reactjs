import React, { Component } from 'react';
import { Col, ListGroup, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default class ListCart extends Component {
    render() {

        const { carts } = this.props

        const sum = carts.reduce(function (result, item) {
            return result + item.total_price;
        }, 0)

        return (
            <Col md={3} mt="2">
                <h4><strong>Cart</strong></h4>
                <hr />
                {carts.length !== 0 &&
                    <ListGroup as="ol" numbered>
                        {carts.map((cartList) => (
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{cartList.product.name}</div>
                                    Total Price:<strong> ${cartList.total_price.toFixed(1)}</strong>
                                </div>
                                <div className="con2">
                                    <div className="con3">
                                        <Button className="mr-2" variant="primary" size="sm">
                                            <FontAwesomeIcon icon={faMinus} />
                                        </Button>
                                        <div className="itemPcsTxt"><strong>{cartList.total_item}</strong></div>
                                        <Button className="ml-2" variant="primary" size="sm">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}

                        <div className="outerContainer">
                            <div className="con1">
                                <h4>Subtotal:</h4>
                                <h4>${sum.toFixed(2)}</h4>
                            </div>
                            <div className="con1">
                                <h4>Shipping:</h4>
                                <h4>FREE</h4>
                            </div>
                            <div className="con1">
                                <h4>Taxes:</h4>
                                <h4>$13</h4>
                            </div>
                            <hr />
                            <div className="con1">
                                <h4>Total Price:</h4>
                                <h4 className="total"><strong>${(sum + 13).toFixed(2)}</strong></h4>
                            </div>
                        </div>

                        <Container className="purchaseContainer">
                            <Button className="purchaseBtn" variant="primary" block size="lg">
                                <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} />
                                Purchase All Item
                            </Button>
                        </Container>

                    </ListGroup>}
            </Col>
        );
    }
}
