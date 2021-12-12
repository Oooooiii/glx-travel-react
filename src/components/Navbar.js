import React, { useState } from 'react'
import './NavbarStyles.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false)

    const handleClick = () => { setClick(!click) }

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'navbar nav-bg' : 'navbar'}>
            <Link to="/"><h1>Galaxy</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/traning">Traning</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamgurger" onClick={handleClick}>
                {
                    click ? (
                        <FaTimes size={20} style={{ color: '#fff' }} />
                    ) : (
                        <FaBars size={20} style={{ color: '#fff' }} />
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
