import React from 'react'
import './home.css'
import Section from './Section'
import Features from './features'

function Home() {
    return (
        <main className='container'>
            <Section />
            <Features
            sectionId = "section1" 
            heading1 = "Charge Anywhere"
            info1 = "Your drivers can plug in at the office, on the road or anywhere with electricity. Travel farther on a single charge and keep going with access to 50,000+ Superchargers along your route."
            img1 = "https://images.unsplash.com/photo-1607171028974-319ba56cb013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            heading2 = "Future of Driving"
            info2 = "Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly."
            img2 = "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/roadster-interior-desktop"
            />
            <Features
            sectionId = "section2" 
             heading1 = "Relentless Performance"
             info1 = "Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road."
             img1 = "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global"
             heading2 = "Optimized Aerodynamics"
             info2 = "Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
             img2 = "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global"
            />
            <Features
            sectionId = "section3" 
             heading1 = "Impact Protection"
             info1 = "A patented side sill structure supports the chassis to absorb impact energy and protect occupants and battery.The position and weight reduce rollover risk and improve emergency avoidance handling"
             img1 = "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-X-Safety-Hero-Desktop"
             heading2 = "Thermal Protection"
             info2 = "In the rare case of damage, Tesla battery packs are designed to spread heat away from the occupant cabin and battery, helping to prevent fires and protect occupants. From 2012 to 2020 in the US, Tesla vehicles were approximately ten times less likely to catch fire per mile driven compared to average gas vehicles."
             img2 = "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/safety-FireSafety-desktop"
            />
        </main>
    )
}

export default Home
