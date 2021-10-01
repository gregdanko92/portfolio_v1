import { Link } from 'react-router-dom'


function Resume(){
    return(
        <div className='resume-body'>
            <div className='resume-top'>
                <div className='resume-top-left'>
                    <h2>Resume</h2> 
                </div>
                <div className='resume-top-right' >
                    {/* <a className='download-cv' href="../cv/CV-Greg-Danko.pdf" download="CV-Greg-Danko.pdf">PDF</a> */}
                    {/* <div className='download-cv'
                    onClick={ () => window.open(require('./CV.pdf'), '_none')}>
                        PDF
                    </div> */}
                </div>
            </div>

            <div className="one-job">
                <div className='job-block-header'>
                    <h4>Senior Research Associate, Nura Bio Inc, South San Francisco, CA</h4> <h4>09/2018-07/2021</h4>
                </div>
                <ul>
                    <li>Built computer programs to increase the speed of data processing and analysis in support of drug discovery efforts. These efforts have saved multiple scientists hours of time that would have been spent manipulating data within excel, while eliminating all points of possible human error. These programs were developed using <strong>Python</strong> , <strong> NumPy</strong>, <strong> Pandas</strong>, and <strong>Seaborn</strong>.</li>
                    <li>Developed image analysis algorithms to extract data from fluorescence microscopy datasets. Utilized <strong>Python</strong>,<strong>ImageJ</strong>, <strong>OpenCV</strong>, and <strong>CellProfiler</strong>.</li>
                    <li>Leveraged automation in the pursuit of consistency and efficiency in cell cultures and cell-based assays using the ZEISS CD7 microscope, Incucyte S3, and Agilent Bravo Liquid Handler whenever relevant.</li>
                    <li>Collaborated across teams regularly in support of drug discovery efforts.</li>
                    <li>Aided in the design and positioning of the company's digital presence.</li>
                    <li>Regularly presented data in team meetings as well as in company-wide discussions.</li>
                    <li>Co-authored the following <a href="https://www.sciencedirect.com/science/article/pii/S2211124720309840">publication</a>.</li>
                </ul>
            </div>
            
            <div className="one-job">
                <div className='job-block-header'>
                    <h4>Lab Technician, Georgetown University, Washington, DC</h4> <h4>08/2017-08/2018</h4>
                </div>
                <ul>
                    <li>
                        Spearheaded a developmental toxicity study characterizing the effects of the anticonvulsants levetiracetam and phenobarbital on the rat brain. Neonatal exposure was characterized through the behavioral, histological, and molecular outcomes.</li>
                    <li>
                        Managed all animal specimens and laboratory supply ordering for the Forcelli lab, ensuring that experiments were able to run on a regular schedule without any unnecessary delay, allowing experimentation to proceed uninhibited.
                    </li>
                    <li>
                        Neurobehavioral testing, immunohistochemistry, degenerative silver staining, stereotaxic surgery, drug dosing, laboratory management, accurate note keeping, data analysis (Microsoft Excel, GraphPad Prism).
                    </li>
                    <li>Co-authored the following <a href="https://pubmed.ncbi.nlm.nih.gov/30261353/">publication</a></li>
                </ul>
            </div>

            <div className="one-job">
                <div className='job-block-header'>
                    <h4>Lab Technician, George Washington University, Washington, DC</h4> <h4>11/2014-08/2016</h4>
                </div>
                <ul>
                    <li>
                    Performed chicken brain dissections on live tissue for use in ex vivo electrophysiology and immunohistochemistry
                    </li>

                    <li>
                    Optimized a protocol for chicken brain dissections for use in ex vivo electrophysiology
                    </li>

                    <li>
                    Built and optimized an ex vivo electrophysiology system for use by all laboratory members, reliably fixed the system when errors occurred to ensure experiment timelines went unimpeded. 
                    </li>

                    <li>
                    Analyzed data from aforementioned experimental methods, and designed experiments to follow up on findings, in the pursuit of characterizing the tangential nucleus of the chicken midbrain.
                    </li>
                </ul>
            </div>

            
    </div>

            
    )
}

export default Resume


