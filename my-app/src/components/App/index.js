import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../NavBar'
import Parallax from '../Parralax'
import API from '../API'

import './index.css'

const App = ()=>{

  return(
    <Router>
      <div className="container">
        <NavBar />
        <Route path="/" exact component={Parallax} />
        <Route path="/analytics" component={API} />
      </div>
    </Router>
  )
}

export default App
