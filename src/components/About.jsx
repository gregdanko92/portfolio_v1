import React from 'react'
import {Link} from 'react-router-dom'
function About(){
    return(
        <div className='about-content'>
            <h1>About Me</h1>
            <p>I'm an east coast transplant living in San Francisco cutting my teeth as an engineer, although I've worked a fair share of other jobs, such as an organic chemistry tutor, chicken fryer, bartender, and most recently as a bench scientist in drug development. Strange as it sounds, this motley of experience prepared me for a career as a software engineer as I have developed meticulous eye for detail, a strong work ethic, and most importantly, mental fortitude to push through an onslaught of failures.
            </p>

            <h2>My Background</h2>
            <p>In 2014, I graduated with my Bachelor of Science in neuroscience from the University of Pittsburgh, and followed it up with a Master of Science in Anatomical and Translational Sciences from George Washington University in 2016. Fully intending on a career in neuroscience research, I moved to California to work in drug development after working in neuroscience and pharmacology labs at both George Washington University and Georgetown University. </p>
            <p>Working at Nura Bio from 2018-2021, I learned a lot about the drug development industry, as well as those services that run in parallel with drug development. I came to a personal conclusion that my eye for innovation lies tangential to the pursuit of science, namely in software. Working at the bench exposed me to inefficiences in research that are only evident in the industrial setting, and that these issues could be abated with the proper software solutions. </p>
            <p>I began to automate some internal data processing tasks that otherwise occupied scientists on our team, and this led to my burgoening interest in programming. Armed with only as much as Google and Stack Overflow could take me, I decided to enroll in General Assembly's Software Engineering Immersive program to gain a more thorough understanding of full stack application development</p>
            <p>I've made a lot of progress in a ~relatively~ short period of time, but I'm always looking to push my horizons further! </p>
            <p>Feel free to check out my <Link to="/projects">projects</Link>,
                 my <Link to='/resume'>resume</Link>, or <Link to='/contact'>connect</Link> with me directly!</p>
        
        </div>
    )
}

export default About