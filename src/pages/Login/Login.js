
import React, { useState } from 'react';
import { Form , Button} from 'react-bootstrap';
import useFirebse from '../hooks/useFirebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const {createUser, loginUser} = useFirebse();

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    
    const signIn = (e) => {
        if(!isLogin){
            createUser(email, password)
        }
        else{
            loginUser(email, password)
        }
        e.preventDefault();
    }

    const getEmail = e => {
        setEmail(e.target.value);
    };
    const getPassword = e => {
        setPassword(e.target.value);
    };
    return (
        <div className="p-5 m-5 w-50 mx-auto">
            <h1>Please {isLogin? 'Login': 'Register'}</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="Already register" />
                </Form.Group>
                <Button onClick={signIn} variant="primary" type="submit">
                    {isLogin? 'Login': 'Register'}
                </Button>
                <Button className="mx-3"  variant="primary" type="submit">
                    Google signIn
                </Button>
            </Form>
        </div>
    );
};

export default Login;