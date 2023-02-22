import React from 'react'
import { Link } from 'react-router-dom'
const MenuLinks = () => {
    // todo: folosind stateul salvat pt auth sa apara astea cand nu esti auth <Link to="/">Login</Link>; <Link to="/">Register</Link>
    return (
        <div className='menu-links'>
            <Link to="/">
                Home
            </Link>
            <Link to="/trends">
                Trends
            </Link>
            <Link to="/my-stocks">
                My Stocks
            </Link>
            <Link to="/">
                Logout
            </Link>
        </div>
    )
}

export default MenuLinks