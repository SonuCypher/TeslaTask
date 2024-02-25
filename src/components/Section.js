import React from 'react'
import './section.css'

function Section(props) {
    return (
        <section className={`sectionContainer ${props.image}`}>
            <header className='headingText'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            </header>
            <footer className='footerButtons'>
                <div className='shopButton'>
                    {props.leftButton}
                </div>
                <div className='driveButton'>
                {props.rightButton}
                </div>
            </footer>
        </section>
        )
}

export default Section

