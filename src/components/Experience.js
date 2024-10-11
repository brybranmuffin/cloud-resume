import react from 'react'
import reactDOM from 'react-dom'
import bryantPic from './../images/bryant.png'
import bryantResume from './../documents/Bryant_Bettencourt_Resume.pdf'

export default function Experience(){
    return (
        <div className="experience">
            
           <div className='experience--top'>
           <img className="experience--top--pic" src={bryantPic} alt="handsome person"></img>
            <div className='experience--top--text'>
                <h1 className='experience--top--header'>Bryant</h1>
                <h1 className='experience--top--header'>Bettencourt</h1>
                <h3 className='experience--top--subscript'>Software Engineer</h3>
                <a className='normal--link' href={bryantResume}><i>Resume PDF</i></a>
            </div>
           </div>

           <div className='experience--container'>
            <div className='experience--header'>
                <h1 className='experience--header--text'>Work Experience</h1>
                <hr className='experience--header--line'></hr>
            </div>
            <div className='experience--element'>
                <h2 className='experience--element--title'>Software Engineer</h2>
                <h3 className='experience--element--subtitle'>Intel | San Jose, Ca | Oct 2021 - June 2024</h3>
                <ul className='experience--element--info'>
                    <li className='experience--element--info--text'>Developed and maintained FPGA routing software in C++. Debugged critical cases, optimized
                    execution efficiency, and refactored C++ codebase utilizing OOP principles</li>
                    <li className='experience--element--info--text'>Created graph-based abstractions using Python to represent the connectivity between hardware blocks in FPGA-based routing software, ensuring accurate and efficient routing</li>
                    <li className='experience--element--info--text'>Implemented unit tests and data processing scripts in Linux environment using Python and Perl</li>
                    <li className='experience--element--info--text'>Reduced developer debugging time by up to 50% per case by developing a connectivity
                    visualization tool to facilitate quick identification of missing block connections</li>
                    <li className='experience--element--info--text'>Led team to implement software representation of hardware blocks on Agilex 5 devices. Coordinated weekly status meetings, performed code reviews for team members, and collaborated with cross functional teams to ensure on time product delivery</li>
                    <li className='experience--element--info--text'>Minimized developer workload during critical phases of software development cycle by extending test coverage and developing new early stage unit tests</li>
                </ul>
            </div>

            <div className='experience--element'>
                <h2 className='experience--element--title'>Software Engineering Intern</h2>
                <h3 className='experience--element--subtitle'>GeoPogo | Berkeley, Ca | May 2020 - December 2020</h3>
                <ul className='experience--element--info'>
                    <li className='experience--element--info--text'>Converted 100+ textures for HD rendering pipeline in Unity, designed custom HD water shaders</li>
                    <li className='experience--element--info--text'>Utilized AWS Cognito tokens and user pool tools to implement asymmetric encryption for secure login</li>
                    <li className='experience--element--info--text'>Overhauled Geopogo’s primary platform onto AWS Gamelift servers to increase the quality of multi-user interactions</li>
                </ul>
            </div>

            <div className='experience--element'>
                <h2 className='experience--element--title'>Undergraduate Student Instructor</h2>
                <h3 className='experience--element--subtitle'>UC Berkeley | Berkeley, Ca | August 2020 - May 2021</h3>
                <ul className='experience--element--info'>
                    <li className='experience--element--info--text'>Taught 700+ students programming concepts such as recursion, concurrency, algorithms, object-
                    oriented programming, and data structures in Snap! and Python</li>
                    <li className='experience--element--info--text'>Developed resource guides with example projects in subjects such as object-oriented design, testing, and library use in Snap! and Python.</li>
                    <li className='experience--element--info--text'>Debugged and assisted on several dozen unique student projects in Snap! and Python</li>
                    <li className='experience--element--info--text'>Created curriculum based on programming topics taught at UC Berkeley for high school students</li>
                </ul>
            </div>
            
           </div>

           <div className='experience--header'>
                <h1 className='experience--header--text'>Skills</h1>
                <hr className='experience--header--line'></hr>
                <ul className='experience--element--info'>
                   <li className='experience--element--info--text'><b>Languages:</b> Python • C/C++ • C# • Java • SQL • HTML • CSS • JavaScript • Go • TypeScript</li>
                   <li className='experience--element--info--text'><b>Technical Tools:</b> AWS • Pandas • NumPy • MatPlotLib • SciKit-learn • Seaborn • React</li>
                </ul>
            </div>
            <div className='experience--header'>
                <h1 className='experience--header--text'>Certifications</h1>
                <hr className='experience--header--line'></hr>
                <ul className='experience--element--info'>
                    <li className='experience--element--info--text'><b>AWS Certified Solution Architect, Associate</b> – September 2024</li>
                </ul>
            </div>
            <div className='experience--header'>
                <h1 className='experience--header--text'>Education</h1>
                <hr className='experience--header--line'></hr>
                <div className='experience--element'>
                    <h2 className='experience--element--title'>University of California, Berkeley</h2>
                    <h3 className='experience--element--subtitle'>Berkeley, Ca | August 2017 - May 2021</h3>
                    <ul className='experience--element--info'>
                        <li className='experience--element--info--text'>B.A. in Data Science, emphasis in Industrial and Business Analytics</li>
                        <li className='experience--element--info--text'>SCET Certificate of Entrepreneurship and Technology</li>
                    </ul>
                </div>
            </div>
            {/* <div className='experience--header'>
                <h1 className='experience--header--text'>Volunteer Experience</h1>
                <hr className='experience--header--line'></hr>
            </div>
            <div className='experience--header'>
                <h1 className='experience--header--text'>Awards</h1>
                <hr className='experience--header--line'></hr>
            </div> */}
          
           
           
        </div>
    )
        
}