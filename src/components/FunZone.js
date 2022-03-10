import React, {useState} from 'react'
import NavbarComp from './Navbar';
import Game from './tiktak/tik-tak-toe';


export default function FunZone() {
    return(
        <>
            <NavbarComp/>
            <Game/>
        </>
    )

    
}
