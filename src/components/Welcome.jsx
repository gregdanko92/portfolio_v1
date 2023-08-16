import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function Welcome() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <body>
                <h1>Hey there, I'm Greg</h1>
                <p>I am a full stack engineer based in Los Angeles, California</p>
                <p>Feel free to check out my detailed <Link to="/work_experience">work experience</Link>,
                 my <Link to='/resume'>resume</Link>, or <Link to='/contact'>connect</Link> with me directly!</p>
            </body>
        </div>
    )
}

export default Welcome