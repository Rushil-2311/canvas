import React, {useState, useEffect} from 'react'
import {Navbar, Nav, Button, Image, Form, Modal} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import CalmMusic from '../images/CalmMusic.mp3'
import { useAuth } from '../context/AuthContext';
import Nccd from '../images/Nccd_Logo.png';
import ModalVideo from 'react-modal-video'
import firebase from '../firebase';
import './navbar.css';

export default function NavbarComp() {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const pathUrl = history.location.pathname;
    const SHOW_SOUND_BAR = ['/meet-the-expert','/buyers-guide','/fun-zone','/puzzle-game','/dashboard', '/resource-center']

    const [isOpen, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const [linkX, setLinkX] = useState('')

    const ref = firebase.firestore().collection('data')

     function getLink(){
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setLinkX(items[0].virtualTour)
        })
    }

    useEffect(()=>{
        getLink()
    },[])

    async function handleLogout(){
        setError('')

        try{  
            await logout()
            history.push('/')  
        }catch{
            setError('Failed to log out')
        }
    }

    const handleClose = () => setModalOpen(false);
    const handleModalOpen = () => setModalOpen(true);
    return (
        <div>
            <>
                <Navbar className="navbarNew" variant="dark" style={{backgroundColor: 'white'}}>
                    <Navbar.Brand href="/dashboard"><Image style={{height: '70px', width:'140px' , backgroundColor: 'white' }} src={Nccd} fluid/></Navbar.Brand>
                     <Nav className="mr-auto ml-auto" inline>
                        <Nav.Link style={{color: '#253eb2'}} href="/dashboard">Lobby</Nav.Link>
                        <Nav.Link style={{color: '#253eb2'}} href="/auditorium">Auditorium</Nav.Link>
                        <Nav.Link style={{color: '#253eb2'}} href="/resource-center">Resource Centre</Nav.Link> 
                        <Nav.Link style={{color: '#253eb2'}} href="/meet-the-expert">Meet the Chef</Nav.Link>
                        <Nav.Link style={{color: '#253eb2'}} href="/buyers-guide">Buyer's Guide</Nav.Link>
                        <Nav.Link style={{color: '#253eb2'}} onClick={handleModalOpen}>Fun Zone</Nav.Link>
                        <Nav.Link style={{color: '#253eb2'}} href="/recipeVideos">Poultry Dhaba</Nav.Link>
                        {/* {
                            SHOW_SOUND_BAR.map(
                                item => item.includes(pathUrl) ? 
                                    <ReactAudioPlayer
                                        src={CalmMusic}
                                        autoPlay
                                        controls
                                /> : null
                            )
                        } */}
                        {/* <Nav.Link onClick={()=>setOpen(true)}>Virtual Tour</Nav.Link> */}
                        <ModalVideo channel='youtube' playlist='OXe3N2cwQcM' autoplay={1} isOpen={isOpen}  width="860" height="415" className="modalVirtual" videoId={linkX} onClose={() => setOpen(false)} />
                    </Nav>
                    <Form inline>
                    <Button style={{color: '#253eb2'}} variant="outline-primary" onClick={handleLogout}>Logout</Button>
                    </Form>
                </Navbar>
                {/* <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div> */}
             <Modal show={modalOpen} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Fun Zone</Modal.Title>
                </Modal.Header>
                <Modal.Body><a href='/fun-zone' >TIC TAC TOE</a></Modal.Body>
                <Modal.Body><a href='/puzzle-game'>PUZZLE GAME</a></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        </div>
    )
}
