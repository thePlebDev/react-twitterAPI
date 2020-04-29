import React from 'react'

import './index.css'



const API = () =>{

const clicked = async ()=>{
  //do something liek this
  //fetch(url,postData).then(do whatever)
}
  return(
    <div>
      <div className="button-container">
        <button onClick={()=>{clicked()}} >Send the request</button>
      </div>
    </div>
  )
}

export default API
