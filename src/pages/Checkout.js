import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button,

}
    from 'react-bootstrap';


const Checkout = () => {
    return (

        <div className="continue-shopping">
            <h5>Thankyou for ordering!Happy shopping</h5>
            <div className="continue-shopping"> 
                <Link to='/products'>
                    <Button variant="primary">Continue Shopping</Button>
                </Link>
            </div>

        </div>


    )
}

export default Checkout