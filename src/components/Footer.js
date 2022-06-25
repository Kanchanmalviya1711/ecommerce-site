import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer  className=" h-auto bg-light mb-1 footer" >
            <Container>
                <Row>
                    <Col className="text-center py-1 text-dark">
                        <h4 >Copyright &copy; Ecommerce 2021</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;