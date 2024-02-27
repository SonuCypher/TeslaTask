import React from 'react'
import './vehicle.css'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

function Vehicle(props) {
    return (
        <section id={props.sectionId} className={`sectionContainer ${props.image}`}>
            <Fade direction='up'>
            <header className='headingText'>
            <Link to={`/products/${props.image}`}><h1>{props.title}</h1></Link>
            <p>{props.description}</p>
            </header>
            </Fade>
            <Fade direction='up'>
            <footer className='footerButtons'>
                <div className='shopButton'>
                    {props.leftButton}
                </div>
                <div className='driveButton'>
                {props.rightButton}
                </div>
            </footer>
            </Fade>
        </section>
        )
}

export default Vehicle

