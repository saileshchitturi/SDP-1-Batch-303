import React from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'

export default function Navbar(){

    return ( 
    <div className="Skill_1">

        <ul>
            

           <Link to = "/Intro">
           <button style = {{backgroundColor :"skyblue"}} > <li >Home</li></button>
           </Link>

           <Link to = "/Policies">
           <button style = {{backgroundColor :"skyblue"}}> <li >Schemes</li></button>
            </Link > 

            <Link to="/home">
           <button style = {{backgroundColor :"skyblue"}}><li >About</li></button>
           </Link>

            
            <Link to = "/Login">
           <button style = {{backgroundColor :"skyblue"}} > <li >Login</li></button>
           </Link>
           
            
            </ul>
<hr></hr>
    </div>
    )
}