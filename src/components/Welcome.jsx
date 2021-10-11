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
                <p>I am a full stack engineer based in San Francisco, California</p>
                <p> After a spending a good amount of time self teaching, and eventually enrolling in a software engineering immersive bootcamp, I'm excited to join the ranks in a proper engineering environment</p>
                <p>My current stack includes Javascript (React, Express, and Node), Python (Pandas, Flask, and Django), and database technology (MongoDB, SQL) and more</p>
                <p>Feel free to check out my <Link to="/projects">projects</Link>,
                 my <Link to='/resume'>resume</Link>, or <Link to='/contact'>connect</Link> with me directly!</p>
            </body>
        </div>
    )
}

export default Welcome