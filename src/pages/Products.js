import React, { Component } from "react";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button, CardSubtitle
} from 'reactstrap'
import axios from 'axios'
import { CartContext } from '../contexts/Cart';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

    }
    componentDidMount() {
        axios.get('https://g0lq8.sse.codesandbox.io/products')
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
    }
    render() {
        const { products } = this.state;
        return (
            <Container>
                <Row>
                    {products.map(product =>
                        <Col sm={4}>
                            <Card>
                                <CardImg top width="100%" src={product.img} height="300px" />
                                <CardBody>
                                    <CardTitle tag="h5">{product.name}</CardTitle>
                                    <CardText>{product.des}</CardText>
                                    <CartContext.Consumer>
                                        {({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to cart</Button>}
                                    </CartContext.Consumer>
                                </CardBody>
                            </Card>
                        </Col>
                    )}

                </Row>
            </Container>
        )
    }
}

export default Product;