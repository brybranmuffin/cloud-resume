import react from 'react'
import reactDOM from 'react-dom'

export default function Header(){
    return (
    <div class="header">
        <ul class="header--pages">
            <li><a href='/info'>Info</a></li>
            {/* <li><a href='/projects'>Projects</a></li> */}
            <li><a href='/experience'>Experience</a></li>
        </ul>
    </div>
   
    )
        
}