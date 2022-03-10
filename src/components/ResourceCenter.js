import React, {useState} from 'react'
import ResourceCenterImg from '../images/Resource_Center.jpg';
import { Image, Modal, Button } from 'react-bootstrap';
import Cognitive_Health_Fact_Sheet_1 from '../images/ResourceCenter/Cognitive_Health_Fact_Sheet_1.pdf';
import eggs_a_natural_for_foodservice from '../images/ResourceCenter/eggs_a_natural_for_foodservice.pdf';
import EGGS101_Handout from '../images/ResourceCenter/EGGS101_Handout.pdf';
import ENC_BackToSchool_2019_Web from '../images/ResourceCenter/ENC_BackToSchool_2019_Web.pdf';
import ENC_Breakfast_2019_Web from '../images/ResourceCenter/ENC_Breakfast_2019_Web.pdf';
import ENC_BusyLifestyles_2019_Web from '../images/ResourceCenter/ENC_BusyLifestyles_2019_Web.pdf';
import ENC_Diabetes_2019_Web from '../images/ResourceCenter/ENC_Diabetes_2019_Web.pdf';
import ENC_DozenWays_June2019_Interactive_1 from '../images/ResourceCenter/ENC_DozenWays_June2019_Interactive_1.pdf';
import ENC_EasterEggs_2019_Web from '../images/ResourceCenter/ENC_EasterEggs_2019_Web.pdf';
import ENC_EggNutritionToolkit from '../images/ResourceCenter/ENC_EggNutritionToolkit.pdf';
import ENC_Fitness_2019_Web from '../images/ResourceCenter/ENC_Fitness_2019_Web.pdf';
import ENC_HealthfulEatingBudget_2019_Web_1 from '../images/ResourceCenter/ENC_HealthfulEatingBudget_2019_Web_1.pdf';
import ENC_HealthyEatingPatterns_2019_Web from '../images/ResourceCenter/ENC_HealthyEatingPatterns_2019_Web.pdf';
import ENC_HeartHealth_2020 from '../images/ResourceCenter/ENC_HeartHealth_2020.pdf';
import ENC_LifelongNutrition_2019_Web from '../images/ResourceCenter/ENC_LifelongNutrition_2019_Web.pdf';
import ENC_Protein_2019_Web_1 from '../images/ResourceCenter/ENC_Protein_2019_Web_1.pdf';
import ENCCognition_2019_Web from '../images/ResourceCenter/ENCCognition_2019_Web.pdf';
import EWG_19_Protein_Performance from '../images/ResourceCenter/EWG_19_Protein_Performance.pdf';
import FINAL_ENC_LS_Navy from '../images/ResourceCenter/FINAL_ENC_LS_Navy.pdf';
import final_waste_infographic_031920 from '../images/ResourceCenter/final_waste_infographic_031920.pdf';
import US_Egg_Equivalent_A4 from '../images/ResourceCenter/US_Egg_Equivalent_A4.pdf';
import US_Egg_Product_Sheet_A4 from '../images/ResourceCenter/US_Egg_Product_Sheet_A4.pdf';
import Value_Added_US_Egg_Products_A4 from '../images/ResourceCenter/Value_Added_US_Egg_Products_A4.pdf';
import WED_INDUSTRY_TOOLKIT from '../images/ResourceCenter/WED_INDUSTRY_TOOLKIT1.pdf';
import NavbarComp from './Navbar';


export default function ResourceCenter() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <NavbarComp/>

        <div style={{position: 'relative'}}>
            <Image src={ResourceCenterImg} fluid/>
            <a target="_blank" style={{cursor: 'pointer'}} onClick={handleShow}>
                <div style={{position: 'absolute', left: '37%', top: '32%', width: '27%', height: '7%'}}>
                </div>
            </a>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Resources</Modal.Title>
                </Modal.Header>
                <Modal.Body><a href={Cognitive_Health_Fact_Sheet_1} target = "_blank">COGNITIVE HEALTH FACT SHEET 1</a></Modal.Body>
                <Modal.Body><a href={EGGS101_Handout} target = "_blank">EGGS101 HANDOUT</a></Modal.Body>
                <Modal.Body><a href={eggs_a_natural_for_foodservice} target = "_blank">EGGS NATURAL FOODSERVICE</a></Modal.Body>
                <Modal.Body><a href={ENC_BackToSchool_2019_Web} target = "_blank">ENC BACK TO SCHOOL 2019 </a></Modal.Body>
                <Modal.Body><a href={ENC_Breakfast_2019_Web} target = "_blank">ENC BREAKFAST 2019 </a></Modal.Body>
                <Modal.Body><a href={ENC_BusyLifestyles_2019_Web} target = "_blank">ENC BUSY LIFESTYLES 2019 </a></Modal.Body>
                <Modal.Body><a href={ENC_Diabetes_2019_Web} target = "_blank">ENC DIABETES 2019 </a></Modal.Body>
                <Modal.Body><a href={ENC_DozenWays_June2019_Interactive_1} target = "_blank">ENC DOZENWAYS JUNE 2019 </a></Modal.Body>
                <Modal.Body><a href={ENC_EasterEggs_2019_Web} target = "_blank">ENC EASTEREGGS 2019 </a></Modal.Body>
                <Modal.Body><a href={ENC_EggNutritionToolkit} target = "_blank">ENC EGG NUTRITION TOOLKIT </a></Modal.Body>
                <Modal.Body><a href={ENC_Fitness_2019_Web} target = "_blank">ENC FITNESS TOOLKIT </a></Modal.Body>
                <Modal.Body><a href={ENC_HealthfulEatingBudget_2019_Web_1} target = "_blank">ENC HEALTH EATING BUDGET 2019</a></Modal.Body>
                <Modal.Body><a href={ENC_HealthyEatingPatterns_2019_Web} target = "_blank">ENC HEATHY EATING PATTERNS 2019 </a></Modal.Body>
                <Modal.Body><a href={ENC_HeartHealth_2020} target = "_blank">ENC HEART HEALTH 2020 </a></Modal.Body>
                <Modal.Body><a href={ENC_LifelongNutrition_2019_Web} target = "_blank">ENC LIFELONG NUTRITION 2019</a></Modal.Body>
                <Modal.Body><a href={ENC_Protein_2019_Web_1} target = "_blank">ENC PROTEIN 2019</a></Modal.Body>
                <Modal.Body><a href={ENCCognition_2019_Web} target = "_blank">ENC COGNITION 2019</a></Modal.Body>
                <Modal.Body><a href={FINAL_ENC_LS_Navy} target = "_blank">FINAL ENC LS NAVY</a></Modal.Body>
                <Modal.Body><a href={EWG_19_Protein_Performance} target = "_blank">EWG PROTEIN PERFORMANCE</a></Modal.Body>
                <Modal.Body><a href={final_waste_infographic_031920} target = "_blank">FINAL WASTE INFOGRAPHIC</a></Modal.Body>
                <Modal.Body><a href={US_Egg_Equivalent_A4} target = "_blank">US EGG EQUIVALENT</a></Modal.Body>
                <Modal.Body><a href={US_Egg_Product_Sheet_A4} target = "_blank">US EGG PRODUCT SHEET</a></Modal.Body>
                <Modal.Body><a href={Value_Added_US_Egg_Products_A4} target = "_blank">VALUE ADDED EGG PRODUCTS</a></Modal.Body>
                <Modal.Body><a href={WED_INDUSTRY_TOOLKIT} target = "_blank">WED INDUSTRY TOOLKIT</a></Modal.Body>




                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>

    )
}
