import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'

function LandingPage() {
    return (
        <>
            <Navbar />
            <Home/>
            <About/>
            <Skills/>

        </>
    )
}

export default LandingPage