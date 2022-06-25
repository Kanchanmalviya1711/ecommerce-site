import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    console.log(props)

    const history = useHistory()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { password, email } = formData;
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        props.login()
        history.push("/products");
    }

    return (
        <>
            <Container fluid className="p-0 container mt-5">
            <h2 className="top-heading">LOGIN</h2>
                <Form className ="login-form" onSubmit={handleLogin} >
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            required
                            name="email"
                            value={email}
                            onChange={handleFormData}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            required
                            name="password"
                            value={password}
                            onChange={handleFormData} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>


        </>
    )
}

export default Login
