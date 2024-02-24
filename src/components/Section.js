import React from 'react'
import styled from 'styled-components'

function Section() {
    return (
       <SectionContainer>
            <HeadingText>
                <h1>Model S</h1>
                <p>Lease starting at $329/mo*</p>
            </HeadingText>
       </SectionContainer>
    )
}

export default Section

const SectionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg');

`
const HeadingText = styled.div`
    padding-top:15vh;
    text-align:center;
`
