import React from 'react'
import './features.css'

function Features(props) {
    return (
        <section id={props.sectionId} className='featureContainer'>
           <div className='mainHeading'>
           <div style={{maxWidth:"500px"}}>
           <h1>{props.heading1}</h1>
            <p>
             {props.info1}           </p>
           </div>
           <div>
           <img alt='img' style={{height:"200px",width:"500px"}} src={props.img1} />
           </div>
           </div>
           <div className='mainHeading'>
           
           <div>
           <img alt='img' style={{height:"200px",width:"500px"}} src={props.img2} />
           </div>
           <div style={{maxWidth:"500px"}}>
           <h1>{props.heading2}</h1>
            <p>
            {props.info2}           </p>
           </div>
           </div>


        </section>
    )
}

export default Features
