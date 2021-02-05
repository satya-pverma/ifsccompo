import React, { useEffect } from 'react'
import { useState } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import M from "materialize-css"
//import banklist from './banklist'
import './App.css';
import { Searchifsc } from './Searchifsc';
import Addbank from './Addbank';
import { Adddetails } from './Adddetails';

function Ifsc() {
  const [IFSC, setIfsccode] = useState("");
  const [search, setSearch] = useState(false);
  const [tick, setTick] = useState(false);
  const [BRANCH, setBranch] = useState('');
  const [MICR, setMicr] = useState('');
  //const [STATE,setState]=useState('')
  const [DISTRICT,setDistrict]=useState('')
 // const[BANK,setBank]=useState('')

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




  useEffect(() => {
    fetch("/ifsc", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ifsc: IFSC
      }),
    })
      .then((res) => res.json())
      .then(result => {
        console.log(result)
        if (result.BRANCH != null) {

          setTick(!tick);
          setBranch(result.BRANCH);
          setMicr(result.MICR)
          setState(result.STATE)
          setBank(result.BANK)
          setDistrict(result.DISTRICT)
          setIfsccode(result.IFSC)

        }
        if (result.ifsc == "wrong") {
          setTick(false)
        }
      })


  }, [IFSC])

  useEffect(() => {

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }, [search])


  return (
    <div className="ifsc" >
      
      <input type="text" placeholder="Account no" />
      <br />
      <div style={{ display: "flex" }}>
        <input
          className="input-ifsc"
          type="text"

          // pattern="[A-Za-z]{4}[0]{1}[0-9A-za-z]{6}"
          placeholder="IFSC"
          value={IFSC}

          onChange={(e) => setIfsccode(e.target.value)}
        /> {
          tick ? (
            <>
              <i style={{ color: "green" }} className="material-icons small">verified_user</i><br />

            </>
          ) :
            <h6></h6>
        }

        <br />

      </div>

      {
        tick ?

          <div>
            <p>MICR No.{MICR}</p>
            <p>Branch Name:{BRANCH}</p>
          </div>
          :
          <h4></h4>
      }
      <h5 className="btn" onClick={() => setSearch(!search)}>Search IFSC</h5>
      {
        search ?
        <Searchifsc/>

        
          :
          <div>
            <h2></h2>
          </div>
      }







 
    </div>
  );
}

export default Ifsc
