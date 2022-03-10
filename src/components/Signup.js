import React, {useRef, useState, useEffect} from 'react'
import { Form, Button, Card, Alert, Image} from 'react-bootstrap';
import { Link , useHistory} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NccdImg from '../images/Exterior.jpeg';
import firebase from '../firebase';
import {v4 as uuidv4} from 'uuid';
import './podcast.css';

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [joineeDate, setJoineeDate] = useState('');

    const history = useHistory()

    const ref = firebase.firestore().collection('users')
    console.log(ref)

    // function getUsers(){
    //     ref.onSnapshot((querySnapshot) => {
    //         const items = [];
    //         querySnapshot.forEach((doc) => {
    //             items.push(doc.data());
    //         })
    //         setUsers(items)
    //     })
    // }

    // useEffect(()=>{
    //     getUsers()
    // },[])

    // console.log(users)

    function addUser(newUser){
        ref
            .doc(newUser.id)
            .set(newUser)
            .catch((err)=>{
                console.log(err)
            })
    }

    async function handleSubmit(e){
        e.preventDefault()


        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        }catch{
            history.push("/dashboard")        
        }
        setLoading(false)
    }

    return (
        <div className="wrapper" >
            <Image className="imgAudi" src={NccdImg} fluid/>
            <Card className="signup">
                <Card.Body className="box">
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => setEmailForm(e.target.value)} type="email" ref={emailRef} required/>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} ref={passwordRef} type="number" required/>
                        </Form.Group>
                        <Button className="signupbutton" onClick={()=>addUser({emailForm,phoneNumber, id: uuidv4()})} disabled={loading} type="submit">Login</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

