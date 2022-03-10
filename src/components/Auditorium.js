import React, {useState, useEffect} from 'react'
import AuditoriumImg from '../images/Auditorium_USSEC.jpeg';
import { Image, Modal,Button} from 'react-bootstrap';
import ModalVideo from 'react-modal-video'
import firebase from '../firebase';
import ChannelForm from "./ChannelForm";
import NavbarComp from './Navbar';
import Thumb_YT from '../images/Thumb_YT.jpeg';


export default function Auditorium() {

    const [isOpen, setOpen] = useState(false)
    const [linkY, setLinkY] = useState('')
    const [audiValue, setAudiValue] = useState(true)
    const [show, setShow] = useState(false);
    const [zoomVideo, setZoomVideo] = useState('');
    const [channel, setChannel] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setOpen(true);

    const ref = firebase.firestore().collection('data')

    function getLink(){
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            console.log(items,'items')
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setLinkY(items[0].seminarVideo)
            setAudiValue(items[0].showVideo)
            setZoomVideo(items[0].zoomVideo)
        })
    }

    useEffect(()=>{
        getLink()
    },[])

    function selectChannel(channel){
        setChannel(channel);
    };    

    function handleClickImage() {
        audiValue ? setOpen(true) : setShow(true)
    }

    return (
        <div>
        <NavbarComp/>
        <div style={{position: 'relative'}}>
            <Image src={AuditoriumImg} fluid/>
            <a target="_blank" onClick={handleClickImage} style={{cursor: 'pointer'}}>
                <div style={{position: 'absolute', left: '28%', top: '8%', width: '45%', height: '54%'}}>
                </div>
                </a>
                    {/* <ModalVideo channel='youtube' playlist='OXe3N2cwQcM' autoplay={1} isOpen={isOpen}  width="860" height="415" videoId="s127Z9K9DVk" onClose={() => setOpen(false)} /> */}
            <Modal show={show} >
                <Modal.Header onClick={handleClose}>
                </Modal.Header>
                <Modal.Body>
                    <Image src={Thumb_YT} alt="G1s" width="1080" fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <ModalVideo channel='youtube' playlist='OXe3N2cwQcM' autoplay={1} isOpen={isOpen}  width="860" height="415" videoId={linkY} onClose={() => setOpen(false)} />
             
                
            
            
            <a target="_blank" href={'https://forms.gle/XUvPwXF8Dp8gNMxt5'} style={{cursor: 'pointer'}}>
                <div style={{position: 'absolute', left: '39%', top: '72%', width: '24%', height: '8%'}}>
                    {/* <ModalVideo channel='youtube' playlist='OXe3N2cwQcM' autoplay={1} isOpen={isOpen}  width="860" height="415" videoId="s127Z9K9DVk" onClose={() => setOpen(false)} /> */}
                </div>
            </a>
               
        </div>
        </div>
    )
}
