import React from 'react'
import Twitter from 'twitter'

import './index.css'



const API = () =>{


  const client = new Twitter({
    consumer_key: "",
    consumer_secret:"",
    access_token: "",
    access_token_secret:"",

  })

const clicked = ()=>{

  client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites.
  console.log(response);  // Raw response object.
});

  //do something liek this
  //let response = await fetch(url,postData)
  //console.log(response)
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
