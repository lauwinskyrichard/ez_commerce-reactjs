import './App.css';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TopNavbar from './components/TopNavbar';
import ListCategories from './components/ListCategories';
import ListCart from './components/ListCart';
import Books from './components/Books';
import axios from 'axios';
import swal from 'sweetalert';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: [],
      carts: []
    }
  }

  componentDidMount() {
    axios.get(`https://u73olh7vwg.execute-api.ap-northeast-2.amazonaws.com/staging/book?nim=2301851143&nama=Richard+Lauwinsky`)
      .then(res => {
        const books = res.data.products;
        this.setState({ books });
      })
      .catch(error => {
        console.log(error);
      })

    axios.get(`http://localhost:3001/carts`)
      .then(res => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidUpdate(prevState) {
    if (this.state.carts !== prevState.carts) {
      axios.get(`http://localhost:3001/carts`)
        .then(res => {
          const carts = res.data;
          this.setState({ carts });
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  cartIn = (value) => {

    axios.get('http://localhost:3001/carts?product.id=' + value.id)
      .then(res => {
        if (res.data.length === 0) {
          const cart = {
            total_item: 1,
            total_price: value.price,
            product: value
          };

          axios.post('http://localhost:3001/carts', cart)
            .then(res => {
              swal({
                title: false,
                text: "You added \"" + cart.product.name + "\" to cart!",
                icon: "success",
                button: "OK",
                timer: 1000,
              });
            })
            .catch(error => {
              console.log(error);
            });
        }
        else {
          const cart = {
            total_item: res.data[0].total_item + 1,
            total_price: res.data[0].total_price + value.price,
            product: value
          };

          axios.put('http://localhost:3001/carts/' + res.data[0].id, cart)
            .then(res => {
              swal({
                title: false,
                text: "You added \"" + cart.product.name + "\" to cart!",
                icon: "success",
                button: "OK",
                timer: 1000,
              });
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { books, carts } = this.state

    return (
      <div className="App">
        <TopNavbar />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories books={books} />
              <Col>
                <h4><strong>Product List</strong></h4>
                <hr />
                <Row>
                  {books && books.map((book) => (
                    <Books
                      key={book.id}
                      book={book}
                      cartIn={this.cartIn} />
                  ))}
                </Row>
              </Col>
              <ListCart carts={carts} />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}