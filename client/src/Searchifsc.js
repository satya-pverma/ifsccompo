import React, { useEffect, useState } from 'react'

export const Searchifsc = () => {
  const [bank,setBank]=useState('');
  const [state,setState]=useState('')
  const [dist,setDist]=useState('')
  const [ifsc,setIfsc]=useState('')
  const [show,setShow]=useState(false)

    const findIfsc= () => {
                fetch(`/findifsc`, {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                     bank,
                     state,
                     dist
                    }),
                  })
                    .then((res) => res.json())
                    .then(result => {
                      console.log(result)
                      result.map(item=>{
                          //console.log(typeof(item.ifsc))
                          setShow(true)
                          setIfsc(item.ifsc)
                         // console(ifsc)
                      })
                     
                      
                    })
            
         

    }


    return (
        <div className="searching" style={{width:"100%"}}>
            <div className="searchifsc" >

                <div class="input-field col s12" style={{ width: "250px" }}>

                    <div className="select-menu">
                    <select  onChange={(e)=>setBank(e.target.value)} value={bank}  required  class="browser-default">
                            <option >Select Bank</option>
                            <option disabled>abc</option>
                      
                        </select>
                        <select style={{marginTop:"20px"}}  onChange={(e)=>setState(e.target.value)} value={state} required  class="browser-default">
                        <option  >Select State</option>
                          
                            <option disabled>state1</option>
                            <option value="MAHARASHTRA">MAHARSHTRA</option>

                        

                        </select>
                        <select style={{marginTop:"20px"}}   onChange={(e)=>setDist(e.target.value)} value={dist} required  class="browser-default">
                            <option  >Select District</option>
                            <option >AURANGABAD</option>
                            <option >NAGPUR</option>
                            <option >PUNE</option>
                            <option >AKOLA</option>
                            <option >CHANDRAPUR</option>
                            <option >JALGAON</option>
                            <option >PARBHANI</option>
                            <option >SOLAPUR</option>
                            <option >THANE</option>
                            <option >LATUR</option>
                        </select>
                   

                    </div>
                </div>
                
            </div>
            {
           ifsc?
           <div>
               <h5>{ifsc}</h5>
          
           </div>
           :
           <></>
       }
            <button onClick={()=>findIfsc()} className="btn">Find Ifsc</button>
    
       </div>
    )
}
