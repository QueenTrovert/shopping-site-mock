import React, { Component } from 'react';
import Cards from './Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            items: ''
        }
    }

    async componentDidMount() {
        const productsList = await fetch('https://fakestoreapi.com/products');
        const data = await productsList.json();

        this.setState({
            items: data
        })

    }

    render() {
        const items = this.state.items;
        return (
            <div className="p-5">
                <Container>
                    <Row>
                    {
                        Object.entries(items).map(i => {
                            return (
                                <Col>
                                <Cards
                                    title={i[1].title}
                                    image={i[1].image}
                                    price={i[1].price}
                                    key={i[1].id} 
                                    />
                                </Col>
                            )

                        })
                    }
                    </Row>
                    </Container>

            </div>
        )
    }
}
export default Products;