import React from 'react'
import Section from './Section'
import './home.css'

function Home() {
    return (
        <main className='homeContainer'>
            <Section
                title = "Model S"
                description = "Lease starting at $329/mo*"
                image ="Model-S"
                leftButton ="Shop Available"
                rightButton = "Demo Drive"

            />
            <Section  
                title = "Model 3"
                description = "Lease starting at $329/mo*"
                image ="Model-S"
                leftButton ="Shop Available"
                rightButton = "Demo Drive"
            />
            <Section
                title = "Model X"
                description = "Lease starting at $329/mo*"
                image ="Model-S"
                leftButton ="Shop Available"
                rightButton = "Demo Drive" 
            />
            <Section 
                title = "Model Y"
                description = "Lease starting at $329/mo*"
                image ="Model-Y"
                leftButton ="Shop Available"
                rightButton = "Demo Drive"
                />
            <Section 
                title = ""
                description = ""
                image ="Cybertruck"
                leftButton ="Shop Available"
                rightButton = "Demo Drive"
                />
        </main>
    )
}

export default Home

