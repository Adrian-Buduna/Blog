import React, { useState } from 'react'
import "./style.css"
const HamburgerButton = () => {
    // todo sa bag fag ul in local storage cu redux 
    const [flagShowMenu, setFlagShowMenu] = useState(true)
    const toggleFlag = () => {
        setFlagShowMenu(!flagShowMenu)
    }
    return (
        <div className='hamburger-box'>
            {
                flagShowMenu ?
                    <div onClick={toggleFlag} className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    :
                    <div onClick={toggleFlag} className="hamburgerAndX">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            }
        </div>
    )
}

export default HamburgerButton