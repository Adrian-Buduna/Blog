import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import "./style.css"
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='main'>
                <Sidebar />
                <div className='page-content'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout