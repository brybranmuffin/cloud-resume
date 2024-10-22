import react from 'react'
import reactDOM from 'react-dom'
import { Link }  from "react-router-dom";


export default function Header(){
    return (
    <div class="header">
        <ul class="header--pages">
            <li><Link to='/info'>Info</Link></li>
            {/* <li><a href='/projects'>Projects</a></li> */}
            <li><Link to='/experience'>Experience</Link></li>
        </ul>
    </div>
   
    )
        
}