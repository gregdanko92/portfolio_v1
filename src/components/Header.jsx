import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'
function Header() {
    return (
        <header className='site-header'>
            <div className='name'>
                 <Link className='header-link' 
                 to='/'>
                     <h1>Greg Danko</h1></Link>
            </div>
            <div className='send-message '>
            <Link to='/contact' className='link-message' href="mailto:gregdanko92@gmail.com">Connect</Link>
            </div>
        </header>
    )
    
}

export default Header