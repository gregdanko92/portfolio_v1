function Resume(){
    return(
        <div className='resume-body'>
            <div className='resume-top'>
                <div className='resume-top-left'>
                    <h2>Resume</h2> 
                </div>
                <div className='resume-top-right' >
                    <a className='download-cv' href="../public/CV.pdf" download="CV.pdf">PDF</a>
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
                    <li>Spearheaded a developmental toxicity study characterizing the effects of the anticonvulsants levetiracetam and phenobarbital on the rat brain. Neonatal exposure was characterized through the behavioral, histological, and molecular outcomes.</li>
                    <li>Neurobehavioral testing, immunohistochemistry, degenerative silver staining, stereotaxic surgery, drug dosing, laboratory management, accurate note keeping, data analysis (Microsoft Excel, GraphPad Prism).</li>
                    <li>Co-authored the following <a href="https://pubmed.ncbi.nlm.nih.gov/30261353/">publication</a></li>
                </ul>
            </div>

            <div className="one-job">
                <div className='job-block-header'>
                    <h4>Laboratory Technician, George Washington University, Washington, DC</h4> <h4>11/2014-05/2016</h4>
                </div>
                <ul>
                    <li>As a laboratory assistant under Dr. Kenna Peusner, I have been using the vestibular system of the chick in order to study vestibular phenomena in humans. Methods I have employed include electrophysiology, brain dissection, brain slicing, confocal microscopy, immunohistochemistry, and dye injection.</li>
                </ul>
            </div>
            
    </div>

            
    )
}

export default Resume


