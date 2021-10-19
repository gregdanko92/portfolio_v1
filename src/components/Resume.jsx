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
                </div>
                
                <div className='resume-top-right' >
                    <a className='download-cv'
                    target="_blank"
                    href='https://docs.google.com/document/d/e/2PACX-1vR2VNXJPbDnKb1L2cAP3jmxFisMHZjeu-KfOdjLYJDe4oFzRyHFPGfCFKhWQS0GaRMXVAW2E2ewHvle/pub'
                    >PDF</a>
                
                </div>
            </div>

            <div className='professional-experience'>
            <>Software Engineering Compentencies</>
        </div>
            <div className='skill-block-parent'>
                    <div className='skill-block'>
                        <div className='skill-block-heading'><strong>Languages</strong></div>
                        <div className='skills'>
                            <p>Javascript (ES6)</p>
                            <p>Python3</p>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Mongoose</p>
                            <p>SQL</p>
                            <p>Typescript</p>
                        </div>
                    </div>
                    <div className='skill-block'>
                        <div className='skill-block-heading'><strong>Javascript</strong></div>
                        <div className='skills'>
                            <p>React.js</p>
                            <p>Redux.js</p>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>Node Package Manager</p>
                            <p>Embedded Javascript</p>
                            
                        </div>
                    </div>
                    <div className='skill-block'>
                        <div className='skill-block-heading'><strong>Python</strong></div>
                        <div className='skills'>
                            <p>Pandas</p>
                            <p>NumPy</p>
                            <p>Matplotlib</p>
                            <p>Seaborn</p>
                            <p>CellProfiler</p>
                            <p>OpenCV</p>
                            <p>Django</p>
                        </div>
                    </div>
                    <div className='skill-block'>
                        <div className='skill-block-heading'><strong>Database</strong></div>
                        <div className='skills'>
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                    <div className='skill-block'>
                        <div className='skill-block-heading'><strong>Tooling</strong></div>
                        <div className='skills'>
                            <p>Git/Github</p>
                            <p>Postman</p>
                            <p>Bash/Zsh</p>
                            <p>Postbird</p>
                            <p>Heroku</p>
                        </div>
                    </div>
                    <div className='skill-block'>
                        <div className='skill-block-heading'><strong>Conventions</strong></div>
                        <div className='skills'>
                            <p>Agile Development</p>
                            <p>RESTful API</p>
                            <p>MVC</p>
                            <p>Responsive Web Design</p>
                        </div>
                    </div>
            </div>

                <div className='professional-experience'>
                    <>Professional Experience</>
                </div>

            <div className="one-job">
                <div className='job-block-header'>
                    <h2>Senior Research Associate, Nura Bio Inc, South San Francisco, CA</h2> <h2>09/2018-07/2021</h2>
                </div>
                
                    <p>Built computer programs to increase the speed of data processing and analysis in support of drug discovery efforts. These efforts have saved multiple scientists hours of time that would have been spent manipulating data within excel, while eliminating all points of possible human error. These programs were developed using <strong>Python</strong> , <strong> NumPy</strong>, <strong> Pandas</strong>, and <strong>Seaborn</strong>.</p>
                    <p>Developed image analysis algorithms to extract data from fluorescence microscopy datasets. Utilized <strong>Python</strong>,<strong>ImageJ</strong>, <strong>OpenCV</strong>, and <strong>CellProfiler</strong>.</p>
                    <p>Leveraged automation in the pursuit of consistency and efficiency in cell cultures and cell-based assays using the ZEISS CD7 microscope, Incucyte S3, and Agilent Bravo Liquid Handler whenever relevant.</p>
                    <p>Collaborated across teams regularly in support of drug discovery efforts.</p>
                    <p>Aided in the design and positioning of the company's digital presence.</p>
                    <p>Regularly presented data in team meetings as well as in company-wide discussions.</p>
                    <p>Co-authored the following <a href="https://www.sciencedirect.com/science/article/pii/S2211124720309840">publication</a>.</p>
            
            </div>
            
            <div className="one-job">
                <div className='job-block-header'>
                    <h2>Lab Technician, Georgetown University, Washington, DC</h2> <h2>08/2017-08/2018</h2>
                </div>
                
                    <p>
                        Spearheaded a developmental toxicity study characterizing the effects of the anticonvulsants levetiracetam and phenobarbital on the rat brain. Neonatal exposure was characterized through the behavioral, histological, and molecular outcomes.</p>
                    <p>
                        Managed all animal specimens and laboratory supply ordering for the Forcelli lab, ensuring that experiments were able to run on a regular schedule without any unnecessary delay, allowing experimentation to proceed uninhibited.
                    </p>
                    <p>
                        Neurobehavioral testing, immunohistochemistry, degenerative silver staining, stereotaxic surgery, drug dosing, laboratory management, accurate note keeping, data analysis (Microsoft Excel, GraphPad Prism).
                    </p>
                    <p>Co-authored the following <a href="https://pubmed.ncbi.nlm.nih.gov/30261353/">publication</a></p>
                
            </div>

            <div className="one-job">
                <div className='job-block-header'>
                    <h2>Lab Technician, George Washington University, Washington, DC</h2> <h2>11/2014-08/2016</h2>
                </div>
                
                    <p>
                    Performed chicken brain dissections on live tissue for use in ex vivo electrophysiology and immunohistochemistry
                    </p>

                    <p>
                    Optimized a protocol for chicken brain dissections for use in ex vivo electrophysiology
                    </p>

                    <p>
                    Built and optimized an ex vivo electrophysiology system for use by all laboratory members, reliably fixed the system when errors occurred to ensure experiment timelines went unimpeded. 
                    </p>

                    <p>
                    Analyzed data from aforementioned experimental methods, and designed experiments to follow up on findings, in the pursuit of characterizing the tangential nucleus of the chicken midbrain.
                    </p>
                
            </div>

            <div className='education-section'>
            <div className='professional-experience'>
                    <>Education</>
                </div>
                <div className='job-block-header'>
                    <h3>Software Engineering Immersive Fellow, General Assembly</h3> <h3>09/2021</h3>
                </div>
                <div className='job-block-header'>
                    <h3>Master of Science, Anatomical and Translational Sciences, George Washington University</h3> <h3>06/2016</h3>
                </div>
                <div className='job-block-header'>
                    <h3>Bachelor of Science, Neuroscience, University of Pittsburgh</h3> <h3>08/2014</h3>
                </div>
            </div>

        


    </div>

            
    )
}

export default Resume


