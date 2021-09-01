import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {

return (

<footer>
                <div className='footerLeft'>
                    <Link to="/" exact>
                    <h4>Home</h4>
                    </Link>
                    <Link to="/about" >                  
                        <h4>About</h4>
                    </Link>
                </div>
                <div className='footerMiddle'>
                    <Link to="/resume">
                    <h4>Resume</h4>
                    </Link>
                    <Link to="/projects">
                    <h4>Projects</h4>
                    </Link>
                </div>
                <div className='footerRight'>
                    <h4>Contact Links</h4>
                    <h4> © 2021 Greg Danko</h4>
                </div>

            </footer>
)
}

export default Footer