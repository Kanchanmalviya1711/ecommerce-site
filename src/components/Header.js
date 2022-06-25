import {
    Container,
    Navbar,
    Nav
}
    from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo from "../image/logo-ecom.jpg";




const Header = (props) => {

    return (

        <>
            {
                props.login === true ? (
                    <Navbar bg="light" variant="light">
                        <Container  className="ecomm-logo">
                            <img src={Logo} alt="BigCo Inc. logo" />
                            <Nav className="me-left">
                                <Nav.Link><Link to='/products'>Product </Link></Nav.Link>
                                <Nav.Link ><Link to='/'>logout </Link></Nav.Link>

                            </Nav>
                        </Container>
                    </Navbar>
                ) : (
                    <Navbar bg="light" variant="light">
                        <Container className="ecomm-logo" >
                            <img src={Logo} alt="BigCo Inc. logo" />
                            {/* <Nav className="me-left">
                        <Nav.Link><Link to='/'>Login </Link></Nav.Link>
                    </Nav> */}
                        </Container>
                    </Navbar>
                )
            }

        </>



    )
}

export default Header
