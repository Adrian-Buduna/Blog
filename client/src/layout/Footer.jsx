import React from 'react'
import "./style.css"
const Footer = () => {
  // current year
  const myDate = new Date();
  const year = myDate.getFullYear();
  return (
    <div className='footer '>
      © {year} All rights reserved Buduna Ionut-Adrian
    </div>
  )
}

export default Footer