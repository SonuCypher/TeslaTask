import React, { useState } from 'react'
import Vehicle from './Vehicle'
import './product.css'

function Product() {
    const [ vehicle, setVehicle] = useState([
        {sectionId:"section1",
        title : "Model S",
        description : "From $71,090*",
        image :"model-S",
        leftButton :"Shop Available",
        rightButton : "Demo Drive"},

        {sectionId:"section2",
        title : "Model 3",
        description : "Lease starting at $329/mo*",
        image :"model-3",
        leftButton :"Custom Order",
        rightButton : "Demo Drive"},

        {sectionId:"section3",
        title : "Model X",
        description : "From $68,590*",
        image :"model-X",
        leftButton :"Order Now",
        rightButton : "Demo Drive"},

        {sectionId:"section4",
        title : "Model Y",
        description : "From $31,890*",
        image :"model-Y",
        leftButton :"Order Now",
        rightButton : "Demo Drive"},

        {sectionId:"section5",
        title : " ",
        description : "From $68,590*",
        image :"cybertruck",
        leftButton :"Order Now",
        rightButton : "Demo Drive"},
    ])
    return (
        <main className='Container'>
            {vehicle.map((e,i) => <Vehicle sectionId={e.sectionId} title = {e.title} description = {e.description} image ={e.image} leftButton ={e.leftButton} rightButton = {e.rightButton} />)}

        </main>
    )
}

export default Product

