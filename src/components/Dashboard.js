import React , {useState, useEffect} from 'react'
import { Card, Button, Alert, Image, Container, Modal } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LobbyFinal from '../images/Lobby.jpeg';
import ModalVideo from 'react-modal-video'
import HomeImg from '../images/Home.jpg';
import ReactPlayer from 'react-player'
import AgendaPdf from '../images/Agenda.pdf';
import firebase from '../firebase';
import Docket from '../images/NCCD_NEW_DOCKET.pdf';
import NavbarComp from './Navbar';
import TransitionVideo from '../../src/images/Transitions.mp4'
import Virtual_Tour_Blink from '../images/Virtual_Tour_Blink.gif';
import './podcast.css';
import { render } from '@testing-library/react';


export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const [isOpen, setOpen] = useState(false)
    const [linkZ, setLinkZ] = useState('')
    const [virtualTourLink, setVirtualTourLink] = useState('')
    const [videoEnded, setVideoEnded]= useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const history = useHistory()

    const ref = firebase.firestore().collection('data')

    function getLink(){
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setLinkZ(items[0].standeeVideo)
            setVirtualTourLink(items[0].virtualTour)
        })
    }

    const handleClose = () => setModalOpen(false);
    const handleModalOpen = () => setModalOpen(true);

    function afterVideoRender(){
        return (
            <>
                <NavbarComp/>
                <div style={{position: 'relative'}}>
                    <Image src={LobbyFinal} fluid/>
                    {/*Buyer's guide */}
                    <Link to='/recipeVideos'><div style={{position: 'absolute', left: '77%', top: '55%', width: '12%', height: '14%'}}></div></Link>

                    {/*Agenda */}
                    <a target="_blank"  href={`https://wa.me/919871036480`} ><div style={{position: 'absolute', left: '45%', top: '77%', width: '14%', height: '10%'}}></div></a>

                    {/*Help Desk*/}
                    {/* <a target="_blank" href={AgendaPdf}><div style={{position: 'absolute', left: '27%', top: '73%', width: '9%', height: '13%'}}></div></a> */}

                    {/*Podcast*/}
                    <Link to="/resource-center"><div style={{position: 'absolute', left: '71%', top: '36%', width: '12%', height: '11%'}}></div></Link>

                    {/*Podcast*/}
                    <Link to="/buyers-guide"><div style={{position: 'absolute', left: '13%', top: '56%', width: '11%', height: '11%'}}></div></Link>

                    {/* <div style={{position: 'relative'}}> */}
                    {/* <div style={{position: 'absolute', left: '2.2%', top: '44.2%', width: '7.5%', height: '41%'}}>
                        <img style={{width: '100%', height: '100%'}} src={linkZ}/>
                    </div> */}
                    {/* </div> */}

                    {/* <a target="_blank"  href={`https://firebasestorage.googleapis.com/v0/b/auth-development-1bba8.appspot.com/o/Poultry%20recipe%20book.pdf?alt=media&token=27a3b70b-0574-475f-bc57-26235d281735`} ><div style={{position: 'absolute', left: '2%', top: '44%', width: '8%', height: '41%'}}></div></a>

                    <a target="_blank"  href={`https://firebasestorage.googleapis.com/v0/b/auth-development-1bba8.appspot.com/o/Turkey%20Book.pdf?alt=media&token=39dfc6bf-87f1-4897-abc3-d469f172eee7`} ><div style={{position: 'absolute', left: '89%', top: '43%', width: '9%', height: '41%'}}></div></a> */}


                    {/*Poultry Dhaba */}
                    {/* <a href='#' onClick={() =>alert('Hlo, I am Yashwant Bhojwani for query -> +91 98710 36480')}> */}
                    <Link to="/meet-the-expert">
                        <div style={{position: 'absolute', left: '18%', top: '33%', width: '12%', height: '15%'}}>
                        </div>
                    </Link>
                    {/* </a> */}

                    {/*Seminar hall */}
                    <Link to="/auditorium">
                        <div style={{position: 'absolute', left: '38%', top: '53%', width: '25%', height: '17%'}}></div>
                    </Link>

                    <div style={{cursor: 'pointer'}}  onClick={handleModalOpen}>
                        <div style={{position: 'absolute', left: '86%', top: '58%', width: '9%', height: '27%'}}></div>
                    </div>

                    {/* <Link to="/fun-zone">
                        <div style={{position: 'absolute', left: '89%', top: '42%', width: '9%', height: '45%'}}></div>
                    </Link> */}

                    {/* <div  onClick={()=>setOpen(true)} style={{position: 'absolute', left: '39%', top: '80%', width: '22%', height: '7%' , cursor: 'pointer'}}>
                        <img style={{width: '100%', height: '100%'}} src={Virtual_Tour_Blink}/>
                    </div>
                    <ModalVideo channel='youtube' playlist='OXe3N2cwQcM' autoplay={1} isOpen={isOpen}  width="860" height="415" className="modalVirtual" videoId={virtualTourLink} onClose={() => setOpen(false)} /> */}


                    {/* <a target="_blank" href={Docket}><div style={{position: 'absolute', left: '89%', top: '72%', width: '6%', height: '12%'}}></div></a> */}
                    {/* <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={handleLogout}>Log Out</Button>
                    </div> */}
                    </div>
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
        )
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

    useEffect(() => {
    },[])

    const dateMain = new Date();
    const month = dateMain.getMonth()
    const hoursMin = dateMain.getHours()
    const day = dateMain.getDay()
    const nextDay = dateMain.getDay() + 1
    // localStorage.setItem('date',day.toString())
    // console.log(localStorage.getItem('showVideo'))
    const dateNumber = Number(localStorage.getItem('date'))

    // const onLoadedData = () => {
    //     (true)
    // }

    return (
        <div className="wrapperPortrait">
            {/* {month === 2 && hoursMin > 8 && hoursMin < 15 ?   */}
            {!videoEnded ?
            <div>
                <ReactPlayer
                    playing={true}
                    url={TransitionVideo}
                    width='100%'
                    height='100%'
                    onEnded={()=>setVideoEnded(true)}
                />
            </div> : null
            }
            {videoEnded? afterVideoRender(): null}
        </div>

    )   
}
