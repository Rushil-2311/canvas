import React, {useState} from 'react'
import ResourceCenterImg from '../images/Buyers_Guide.jpg';
import { Image, Modal, Button } from 'react-bootstrap';
import English_Final from '../images/Information_Bulletin.pdf';
import NavbarComp from './Navbar';


export default function BuyersGuide() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <NavbarComp/>

        <div style={{position: 'relative'}}>
            <Image src={ResourceCenterImg} fluid/>
            <a target="_blank"  href={`https://www.usapeec.org/buyingandselling/buyersguide/chicken/`} ><div style={{position: 'absolute', left: '31%', top: '13%', width: '19%', height: '22%'}}></div></a>
            <a target="_blank"  href={`https://www.usapeec.org/buyingandselling/buyersguide/turkey/`} ><div style={{position: 'absolute', left: '51%', top: '13%', width: '19%', height: '22%'}}></div></a>
            <a target="_blank"  href={`https://firebasestorage.googleapis.com/v0/b/auth-development-1bba8.appspot.com/o/Duck-USAPEEC.pdf?alt=media&token=9532536f-5526-4d6b-a861-5bde1ef46936`} ><div style={{position: 'absolute', left: '31%', top: '38%', width: '19%', height: '22%'}}></div></a>
            <a target="_blank"  href={`https://www.usapeec.org/buyingandselling/buyersguide/egg/`} ><div style={{position: 'absolute', left: '51%', top: '38%', width: '19%', height: '22%'}}></div></a>
            {/* <a target="_blank" style={{cursor: 'pointer'}} onClick={handleShow}>
                <div style={{position: 'absolute', left: '37%', top: '32%', width: '27%', height: '7%'}}>
                </div>
            </a>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Resources</Modal.Title>
                </Modal.Header>
                <Modal.Body><a href={'https://midh.gov.in/PDF/midh(English).pdf '} target = "_blank">MIDH GUIDELINES</a></Modal.Body>
                <Modal.Body><a href={English_Final} target = "_blank">NCCD INFORMATION BULLETIN</a></Modal.Body>
                <Modal.Body><a href={'https://www.nccd.gov.in/PDF/NCCDGuidelines2014-15.pdf '} target = "_blank">GUIDELINES & MINIMUM SYSTEM STANDARDS FOR IMPLEMENTATION IN COLD-CHAIN COMPONENTS</a></Modal.Body>
                <Modal.Body><a href={'https://fssai.gov.in/upload/uploadfiles/files/Guidance_Note_Ver2_Artificial_Ripening_Fruits_03_01_2019_Revised_10_02_2020.pdf'} target = "_blank">ARTIFICIAL RIPENING OF FRUITS</a></Modal.Body>
                <Modal.Body><a href={'https://fssai.gov.in/upload/uploadfiles/files/Guidance_Document_Clean_Fresh_Fruit_Vegetable_11_05_2020.pdf'} target = "_blank">CLEAN AND FRESH FRUIT & VEGETABLE MARKET - GUIDANCE REPORT</a></Modal.Body>
                <Modal.Body><a href={'http://nhb.gov.in/schemes/interko.pdf'} target = "_blank">RIPENING</a></Modal.Body>
                <Modal.Body><a href={'https://krishi.icar.gov.in/jspui/bitstream/123456789/17925/1/Physiology%20of%20fruit%20ripening%20%28JHA%202018%29.PDF'} target = "_blank">PHYSIOLOGICAL AND BIOCHEMICAL BASIS OF FRUIT DEVELOPMENT AND RIPENING - A REVIEW</a></Modal.Body>
                <Modal.Body><a href={'https://icar.gov.in/sites/default/files/AR-2019-20-English-Final.pdf'} target = "_blank">INDIAN AGRICULTURE</a></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </div>
        </div>

    )
}
