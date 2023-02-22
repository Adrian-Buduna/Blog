import React from 'react'
import "./style.css"
import { ReactComponent as Logo } from '../assets/logo.svg';

// components 
import { HamburgerButton, MenuLinks } from './components-header'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
        <Logo />
        </div>
        <MenuLinks />
        <HamburgerButton />
    </div>
  )
}

export default Header