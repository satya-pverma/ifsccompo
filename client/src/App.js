import React, { useEffect, useState } from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import FileUpload, { Adddetails } from './Adddetails'
import Ifsc from './Ifsc'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
const App = () => {
  const[admin,setAdmin]=useState(false)

  return (

  
    <div >
      
      <BrowserRouter>
       <Navbar/>
    <div className="App">
     
      <Route exact path="/"component={Ifsc}/>
      <Route path="/addbank" component={FileUpload}/>
    <Route path ="/signup" component={Signup}/>
    <Route path="/signin" component={Login}/>
      
    </div>
    
    </BrowserRouter>
    </div>
  )
}

export default App
