import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <HomeContainer>
            <Section />
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    height: 100vh;
`