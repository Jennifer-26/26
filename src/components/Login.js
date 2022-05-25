import {React,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Container,Row,Col} from "react-bootstrap";
import "./Login.css";
import { useDispatch } from "react-redux";
import {login} from "../features/userSlice";

const Login = ()=> {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true
        }))
    }



    return (
        <div>
            <center>
         <br/><h1>Welcome to Readers Avenue</h1><br/>
        <h1>Login here</h1></center>
        
        <Container className="form_container">
       
             
        <div className="login">
            <Form onSubmit={(e) => handleSubmit(e)} >
                <Row>
                    <Col md>
                <div className="login__label">
                    <Form.Label>Name : </Form.Label>
                    <Form.Control className="form_input" type ="name" placeholder="Enter your name" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                </Col>
                </Row>
                <Row>
                    <Col md>
                <div className="login__label">
                    <Form.Label>Email : </Form.Label>
                    <Form.Control className="form_input" type ="email" placeholder="Enter your Email_Id" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                </Col>
                </Row>
                <Row>
                    <Col md>
                <div className="login__label">
                    <Form.Label>Password : </Form.Label>
                    <Form.Control className="form_input" type ="password" placeholder="Enter password" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                </Col>
                </Row>
                <div className="submit__button">
                    <Button className="submit__btn" variant="light" type="submit">Submit</Button>
                </div>
                
                

            </Form>

        </div>
        </Container>
        </div>
        
    )

}

export default Login;