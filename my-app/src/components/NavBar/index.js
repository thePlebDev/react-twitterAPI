import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

import './index.css'



const NavBar = ()=>{

  const [state,setState] = useState(true)

  const show = ()=>{
    if(state){
      setState(false)
    }else{
      setState(true)
    }
  }

  return (
    <nav>
      <div className="logo">
        <h2>Analytics</h2>
      </div>
      <ul className={state?'nav-links': 'nav-links nav-active'} >
        <Link to="/">
          <li >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li >
            About
          </li>
        </Link>
        <Link to="/analytics">
          <li >
            Analytics
          </li>
        </Link>
      </ul>
      <div className="burger" onClick={()=>show()}>
        <div className={state?"line1": "toggle1 line1"}></div>
        <div className={state?"line2": "toggle2 line2"}></div>
        <div className={state?"line3": "toggle3 line3"}></div>
      </div>
    </nav>
  )
}



export default NavBar
