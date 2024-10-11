import react from 'react'
import reactDOM from 'react-dom'

export default function Header(){
    return (
    <div class="header">
        <ul class="header--pages">
            <li><a href='cloud_resume/info'>Info</a></li>
            {/* <li><a href='/projects'>Projects</a></li> */}
            <li><a href='cloud_resume/experience'>Experience</a></li>
        </ul>
    </div>
   
    )
        
}