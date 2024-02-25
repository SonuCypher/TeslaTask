import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <HomeContainer>
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
                image ="Model-S"
                leftButton ="Shop Available"
                rightButton = "Demo Drive"
                />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    height: 100vh;
`