import React, { useEffect, useRef, useState } from 'react';
import { Link} from "react-router-dom"
import axios from 'axios';


function Adddetails() {


    
    const [file, setFile] = useState('');    
    const [data, getFile] = useState({ name: "", path: "" });  
  const [progress, setProgess] = useState(0); 
  const[prog, setProg]=useState(false);
  const [status,setStatus]=useState(false);
    const el = useRef();
    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); 
    }
    const uploadFile = () => {
        const formData = new FormData(); 
        setProg(true);
        if(formData==null)
        {
            return(console.log("no file selected"))
        }  
        else
        {
         formData.append('file', file); 
        axios.post('/add', formData,  {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
                
              }, 
            
  
        })
        
        .then(data=>{
            console.log(data.data.msg)
            if(data.data.msg=='uploaded')
            {
                setProg(false)
                setStatus(true);
            }
        })
        .catch(err => console.log(err))}
    }

        
    return (
        <div className="file-select">
            <div className="input-field">

                <input className="input-field" accept=".csv" type="file" ref={el} onChange={handleChange} />       
                    
             
          
                <button className="btn " onClick={uploadFile} > Upload
                </button>
                 {
                     prog?
                     <div class="progress">
                     <div class="indeterminate"></div>
                 </div>
                 :
                 <h6></h6>
                 }
                 {
                     status?
                     <h6>File uploaded successfully</h6>
            :
            <h6></h6>
                    }
     
            
            <hr />
            
            </div>

            <div >
     
    </div>






         
        </div>
    );
}
export default Adddetails