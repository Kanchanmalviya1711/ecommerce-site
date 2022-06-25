import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {
    Card,
    Button,
    Container
}
    from 'react-bootstrap';





const Products = () => {

    const history = useHistory()
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://www.mocky.io/v2/5eda4003330000740079ea60");
            setProducts(response.data.data)
        } catch (err) {
            console.log(err)

        }
    }


    useEffect(() => {
        fetchProducts()
    }, []);

    console.log(products, "25")

    const proceedToCheckoutFunction = () => {
        history.push('/checkout')
    }

    return (
        <div>
            <h2 className="top-heading">PRODUCTS</h2>
            <Container>
                <ul className="card-list">
                    {
                        products.map((item) => {
                    
                            return (
                                <li key={item.id}>
                                    <Card className="card-style">
                                        <Card.Img variant="top" src={item.image} className="card-image-center" />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Title>Quantity -{item.quantity}</Card.Title>
                                            <Card.Text>
                                                {item.price} Rs.
                                            </Card.Text>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                            <div className="btn-center">
                                                <Button variant="primary" onClick={proceedToCheckoutFunction} >Proceed To Checkout</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
        </div>
    )
}

export default Products
