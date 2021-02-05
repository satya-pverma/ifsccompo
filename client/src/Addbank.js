import React, { useState } from 'react'

const Addbank=()=>{
    const [ ifsc, setIfsc]=useState('')
const addbank=()=>{
    fetch(`/addbank`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ifsc
        }),
      })
        .then((res) => res.json())
        .then(result => {
          console.log(result)
         
          
        })

}

    return(
        <div>
            <input value={ifsc} onChange={(e)=>setIfsc(e.target.value)} type="text"/>
<button onClick={()=>addbank()}>add</button>
        </div>
    )

}
export default Addbank