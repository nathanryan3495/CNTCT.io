import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <img className="navbar__logo" src="./logo.svg" alt="Etch Logo"/>
                <div className="navbar__links">            
                    <Link to='https://etch.co/team' target='_blank'>Team</Link>  
                    <Link to='https://etch.co/work' target='_blank'>Work</Link>   
                    <Link to='https://etch.co/makes' target='_blank'>Makes</Link>   
                    <Link to='https://etch.co/the' target='_blank'>The</Link>   
                    <Link to='https://etch.co/dream' target='_blank'>Dream</Link>   
                    <Link to='https://etch.co/work' target='_blank'>Work</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
