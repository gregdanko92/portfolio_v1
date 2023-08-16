import { Link } from 'react-router-dom'
import React from 'react'
import { useEffect } from 'react';

function Resume(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <div className='resume-body'>
            <div className='resume-top'>
                <div className='resume-top-left'>
                    <h1>Resume</h1> 
                    <p>Here's a <a 
                    // target="_blank"
                    href='https://docs.google.com/document/d/e/2PACX-1vR2VNXJPbDnKb1L2cAP3jmxFisMHZjeu-KfOdjLYJDe4oFzRyHFPGfCFKhWQS0GaRMXVAW2E2ewHvle/pub'
                    ><b>PDF copy of my resume</b></a> that you can download, I do try to keep it updated on a regular basis, but please reach out for the most current copy over email at gregdanko92@gmail.com </p>
                </div>
                
                <div className='resume-top-right' >
                    
                
                </div>
            </div>
    </div>

            
    )
}

export default Resume


