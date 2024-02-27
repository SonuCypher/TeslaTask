import React from 'react'
import { Fade } from "react-awesome-reveal";
import styles from './section.module.css'

function Section() {
    return (
        <section className={styles.sectionContainer}>
        <Fade direction='up'>
        <header className={styles.headingText}>
        <h1>Model S</h1>
        <p>From $71,090*</p>
        </header>
        </Fade>
        <Fade direction='up'>
        <footer className={styles.footerButtons}>
            <div className={styles.shopButton}>
                Shop Available
            </div>
            <div className='driveButton'>
                Demo Drive
            </div>
        </footer>
        </Fade>
    </section>
    )
}

export default Section
