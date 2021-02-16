import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from '../constants/navbarlinks'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar__container">
                <Link className="navbar__logo" to="/" onClick={closeMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-clinecap="round" stroke-linejoin="round" className="feather feather-package navbar__logo-img"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>CNTCT.io 
                </Link>
                <div className="navbar__mobile-btn" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars navbar__mobile-btn-icon'}/>
                </div>
                <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
                    {NavbarLinks.map((navbarLink, i) => {
                        return (
                            <Link className="navbar__link" to={navbarLink.Url} target='_blank' key={i}>
                                {navbarLink.Name}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar