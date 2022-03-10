import React from 'react'
import { Image,} from 'react-bootstrap';
import NavbarComp from './Navbar';
import FunZone_1 from '../images/FunZone_1.jpeg';


export default function PuzzleGame() {
    return(
        <>
            <NavbarComp/>
            <div style={{position: 'relative'}}>
            <Image src={FunZone_1} fluid/>
            </div>
        </>
    )

    
}
