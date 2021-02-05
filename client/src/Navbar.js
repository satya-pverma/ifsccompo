import React, { useEffect, useState } from 'react'
import M from "materialize-css"
import { Link, useHistory} from 'react-router-dom'
const Navbar = () => {
  const history = useHistory();
const[data,setData]=useState(false)
const[admin,setAdmin]=useState('');
const[showad,setShowad]=useState(false)
    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);

      const user=JSON.parse(localStorage.getItem("user"))
      if(user!=null){
      console.log(user.admin)
      if(user.admin=='true'){
   
      setAdmin(user.admin)
      setShowad(true)
      }
      }
      if(user!=null)
      {
      
          setData(true)
        
      }
     
    
 

    })

    const Logoutuser=()=>{
    
      history.push('/')
      localStorage.clear()
      window.location.reload(true)
    }




    return (
        <div>

<nav >
    <div class="nav-wrapper #e3f2fd blue lighten-5 " >
      <Link style={{color:"black", fontSize:"20px", paddingLeft:"20px"}} to="/" class="brand-logo">MONEYORDER</Link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons " style={{color:"black"}}>menu</i></a>
      <ul class="right hide-on-med-and-down" style={{paddingRight:"20px"}}>
        <li><Link  style={{ color:"black"}} to='/'>Home</Link></li>
        {
        data?
        <>
         
        <li><Link  style={{ color:"black"}}  onClick={()=>{Logoutuser()}} >Logout</Link></li>
        </>
        :
        <>
            <li><Link  style={{ color:"black"}} to="/signin">Login</Link></li>
            <li><Link  style={{ color:"black"}} to="/signup">Sign up</Link></li>

        </>

      }
      {
        admin?
        <li><Link  style={{ color:"black"}} to="/addbank">Add Bank</Link></li>
        :
        <></>
      }
       
        
      </ul>
    </div>
  </nav>

  <ul style={{width:"25%"}} class="sidenav" id="mobile-demo">
    <li><Link to="/">Home</Link></li>
  
    {
        data?
        <>
         
        <li><Link  style={{ color:"black"}} onClick={()=>{Logoutuser()}}>Logout</Link></li>
        </>
        :
        <>
            <li><Link  style={{ color:"black"}} to="/signin">Login</Link></li>
            <li><Link  style={{ color:"black"}} to="/signup">Sign up</Link></li>

        </>

      }
      {
        admin?
        <li><Link  style={{ color:"black"}} to="/addbank">Add Bank</Link></li>
        :
        <></>

      }
  </ul>
            
        </div>
    )
}

export default Navbar
