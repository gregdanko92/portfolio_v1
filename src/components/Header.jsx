import React from 'react'
import Nav from './Nav'
function Header() {
    return (
        <header className='site-header'>
            <div className='name'>
                
                 <h2>Greg Danko</h2>
            </div>
            <div className='nav'  >
                 <Nav/>
            </div>
        </header>
    )
    
}

export default Header