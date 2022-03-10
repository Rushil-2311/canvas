import React from 'react'
import { Image } from 'react-bootstrap';
import MeetExpert from '../images/Meet_The_Expert.jpeg';
import Manjunath_MS_pptx from '../images/Profile_Manjunath.pdf';
import Brief_CV_Dr_R_K_Sharma from '../images/Profile_R_K_SHARMA.pdf';
import Brief_profile_R_H_Dahiya from '../images/Profile_Rouhi_Dahiya.pdf';
import ProfilePdf from '../images/Profile_Yashwant.pdf';
import YogeshDahiya from '../images/Profile_Yogesh_Dahiya.pdf';
import NavbarComp from './Navbar';
import './podcast.css';


export default function MeetTheExpert() {
    return (
        <div>
            <NavbarComp/>
        <div style={{position: 'relative'}}>
            <Image src={MeetExpert} fluid/>
            {/* <a target="_blank" href={ProfilePdf} >
                <div style={{position: 'absolute', left: '26%', top: '50%', width: '7%', height: '5%'}}>
                </div>
            </a> */}
            <a target="_blank" href={`mailto:info@i2iconsulting.biz?subject=Query for Chef Sudhir Pai`}>
                <div style={{position: 'absolute', left: '30%', top: '51%', width: '7%', height: '5%'}}>
                </div>
            </a>
            {/* <a target="_blank" href={Brief_CV_Dr_R_K_Sharma}>
                <div style={{position: 'absolute', left: '36%', top: '50%', width: '7%', height: '5%'}}>
                </div>
            </a> */}
            <a target="_blank" href={`mailto:info@i2iconsulting.bizsubject=Query for Chef Varun Inamdar`}>
                <div style={{position: 'absolute', left: '41%', top: '51%', width: '7%', height: '5%'}}>
                </div>
            </a>
            {/* <a target="_blank" href={Manjunath_MS_pptx}>
                <div style={{position: 'absolute', left: '46%', top: '50%', width: '7%', height: '5%'}}>
                </div>
            </a> */}
            <a target="_blank" href={`mailto:info@i2iconsulting.biz?subject=Query for Chef Y.B Mathur`}>
                <div style={{position: 'absolute', left: '51%', top: '51%', width: '7%', height: '5%'}}>
                </div>
            </a>
            {/* <a target="_blank"  href={Brief_profile_R_H_Dahiya}>
                <div style={{position: 'absolute', left: '56%', top: '50%', width: '7%', height: '5%'}}>
                </div>
            </a> */}

{/* <a target="_blank" href={`mailto:ice.trainings@gmail.com?subject=Query for M.S. junath`}>
                <div style={{position: 'absolute', left: '49%', top: '56%', width: '7%', height: '5%'}}>
                </div>
            </a> */}

            <a target="_blank" href={`mailto:info@i2iconsulting.biz?subject=Query for Mr. Mohit Raja`}>
                <div style={{position: 'absolute', left: '61%', top: '51%', width: '7%', height: '5%'}}>
                </div>
            </a>
            {/* <a target="_blank"  href={YogeshDahiya}>
                <div style={{position: 'absolute', left: '66%', top: '50%', width: '7%', height: '5%'}}>
                </div>
            </a> */}
            {/* <a target="_blank" href={`mailto:ice.trainings@gmail.com?subject=Query for Sh. FM Sheikh`}>
                <div style={{position: 'absolute', left: '65%', top: '53%', width: '7%', height: '5%'}}>
                </div>
            </a> */}
        </div>
        </div>
    )
}
