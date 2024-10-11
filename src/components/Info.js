import react from 'react'
import reactDOM from 'react-dom'
import backgroundImg from './../images/sf.jpeg'
import githubIcon from './../icons/github.png'
import wellfoundIcon from './../icons/wellfound.png'
import linkedinIcon from './../icons/linkedIn.png'

export default function Info(){
    return (
        <div className='info--wrapper'>
            <div className="info">
            
                <div className='info--left'>
                    <div className='info--words'>
                        <h2 className='info--title'>Hi I'm Bryant, <br/>welcome to my website! :) </h2>
                        <p className='info--text'>I’m a software engineer with expertise in developing high-performance, scalable solutions in C++, Python, and more. With a background in FPGA tools development at Intel, I have led projects that optimize complex systems, streamline debugging processes, and create innovative tools for hardware and software integration. I’m passionate about tackling challenging problems, whether it’s building predictive NBA models, creating complex and resilient software, or anyhthing else that excites me! Explore my work to see how I bring technical excellence and creativity to every project I take on!</p>
                    </div>
                    <div className='info--icon--container'>
                        <a target="_blank" href='https://github.com/brybranmuffin'><img className='link--icon' src={githubIcon} alt='github'></img></a>
                        <a target="_blank" href='https://wellfound.com/u/bryant-bettencourt-2'><img className='link--icon' src={wellfoundIcon} alt='wellfound'></img></a>
                        <a target="_blank" href='https://www.linkedin.com/in/bryantbet/'><img className='link--icon' src={linkedinIcon} alt='linkedin'></img></a>
                    </div>
                </div>
                
                <div className='info--right'>
                <img className='info--background' src={backgroundImg}></img>
               
            </div>
            
            

            
        </div>
        </div>
        
    )
        
}