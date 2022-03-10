import React from 'react'
import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap';

export default function NavbarBottom() {

    return (
        <div>
            <>
            <Navbar className="justify-content-center" bg="white" variant="outline-primary" fixed="bottom" >
                {/* <Navbar.Brand href="#home">ICE</Navbar.Brand> */}
                    <Nav >
                <Nav.Link href="/" className="mr-sm-2">Home</Nav.Link>
                <Nav.Link href="/auditorium" className="mr-sm-2">Seminar Hall</Nav.Link>
                <Nav.Link href="/meet-the-expert" className="mr-sm-2">Meet the Experts</Nav.Link>
                <Nav.Link href="/resource-center" className="mr-sm-2">Resouce Center</Nav.Link>
                <Nav.Link href="/podcast" className="mr-sm-2">Podcast</Nav.Link> 
                <Nav.Link href={'https://www.youtube.com/watch?v=1_mEWBBvUyE&ab_channel=TravisScott-Topic'} className="mr-sm-2">Guidance</Nav.Link> 
                </Nav>
            </Navbar>
            </>
        </div>
    )
}
