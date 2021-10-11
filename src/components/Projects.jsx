import React from 'react'
import { useEffect } from 'react';

function Projects(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='projects'>
            <h1>Software Engineering Projects</h1>

            <h2 className='proj-header'>freELN <i>(free electronic lab notebook),</i> September 2021</h2>
            <p> A MERN stack application for scientists to keep track of their experiments.</p>
            <p>Users are able to make folders to organize all of thier experiments. When navigating to a particular folder, the user is then able to make an experiment entry in that folder. Currently, users are able to used the a text editor to style their experiment entries, as well a upload supporting files. </p>
            <h4>Features coming soon:</h4> 
            <p>Authentication for user profiles</p>
            <p>A protocol manager that hold experimental protocols that can be referenced by any experiment</p>
            <p>Certification functionality that will allows users to certify other users experiments. This is extremely important for auditing of scientific research, which is a standard of both publication and regulatory approval processes</p>
            <h4>Technologies Used: </h4>
            <p>React.js, Node.js, Express.js, MongoDB, HTML, CSS, Heroku, Git/Github, Postman </p>
            <p>
                <a href="https://freelnfrontend2.herokuapp.com/" target="_blank">Live Demo</a> 
                    &nbsp; 
                    |
                    &nbsp; 
                <a href="https://github.com/gregdanko92/freeln_frontend_deploy" target="_blank">Client side source code</a> 
                    &nbsp; 
                    |
                    &nbsp; 
                <a href="https://github.com/gregdanko92/freELN_back_end" target="_blank">Server side source code</a> 
            </p>

            <h2 className='proj-header' >Portfolio Web Site, September 2021</h2>
            <p>The very website you're looking at right now!</p>
            <h4>Technologies Used: </h4>
            <p>React.js, HTML, CSS, Heroku, Git/Github, Google Domains </p>
            <p>
                <a href="https://github.com/gregdanko92/portfolio_v1" target="_blank">Source Code</a> 
                    &nbsp; 
            </p>

            <h2 className='proj-header' >MOVIO, August 2021</h2>
            <p> A MEN stack application for users to search up movies, create watchlists, and see where titles are streaming.</p>
            <h4>Technologies Used: </h4>
            <p>Node.js, Express.js, MongoDB, HTML, CSS, Heroku, Git/Github, Embedded Javascript </p>
            <p>Utilized a host of APIs to aggregate movie data, including <a href="https://www.omdbapi.com/">OMDB</a>, <a href="https://developers.google.com/youtube/v3">Youtube API</a>, <a href="https://api.watchmode.com/">Watchmode</a>, and <a href="https://tastedive.com/read/api">Tastedive</a>  </p>
            <p>
                <a href="https://app-movio.herokuapp.com/" target="_blank">Live Demo</a> 
                    &nbsp; 
                    |
                    &nbsp; 
                <a href="https://github.com/gregdanko92/movio" target="_blank">Source Code</a> 
                    &nbsp; 
            </p>

            
            <h2 className='proj-header' >Tamagotchi App, July 2021</h2>
            <p>My first project in the General Assembly Software Engineering immersive app was a Tamagotchi App. Our basic requirements were to create a character and three metrics that increased on an interval, and three actions that can change these intervals. 
            </p>
            <p>I decided to make the app more personal by adding a few extra actions for the user, the ability to name the character, as well as creating different animations for each action using javascript intervals.</p>
            <h4>Technologies Used: </h4>
            <p>HTML, CSS, JavaScript, Git/Github</p>
            <p>
                <a href="https://gregdanko92.github.io/tamagotchi_project/" target="_blank">Live Demo</a> 
                    &nbsp; 
                    |
                    &nbsp; 
                <a href="https://github.com/gregdanko92/tamagotchi_project" target="_blank">Source Code</a> 
            </p>

            


        </div>
    )
}

export default Projects