import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert, Image} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NccdImg from '../images/Ajay_USAPEEC_Flyer.jpg';
import './podcast.css';


export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
       // history.push('/dashboard')
        e.preventDefault()

        try{
            //setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        }catch{
            setError('Failed to log in')
        }
        setLoading(false)
    }

    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <Image className="imgAudi" src={NccdImg} style={{maxWidth:'50%', height:'auto' , display: 'flex'}} fluid/>
            <div className="loginWrapper" style={{width: '50%', float: 'left', position: 'relative'}}>  
            <Card style={{display: 'flex'}} >
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                            {/* <Form.Control type="email" required/> */}
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control ref={passwordRef} required/>
                        </Form.Group>
                        {/* <Button disabled={loading} className="w-100" type="submit">Log In</Button> */}
                        <Button className="w-100" type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/">Need an Account! Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>
            {/* <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div> */}
            </div>
        </div>
    )
}

