import React, { useEffect, useState } from "react"
import{ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import {useNavigate} from "react-router-dom"
import axios from "axios"
import "../App.css"

function Reigister() {
    const navigate =useNavigate()
    const toastoption={
        postion:"bottom-right",
        autoclose:8000,
        theme:"dark"
    }
const [values,setValues]=useState({
    name:"",
    email:"",
    password:""

})
const handlechange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    
}
const handleValidation =()=>{
    const {name,email,password}=values;
    if(name===""){
        toast.error(
            "name is required",
            toastoption
        )
        return false
    }
    
    else if(email===""){
        toast.error(
        "email is required",
        toastoption)
        return false

    }
     else if(password<4){
        toast.error(
        "password length required min 4 ",
        toastoption)
        return false
        
    }
    return true
}
const handleSubmit= async (event)=>{
    event.preventDefault();
    if(handleValidation()){
    const {name,password,email}=values
    const {data}= await axios.post("http://localhost:3000/register",{
        name,
        email,
        password
    })
    if(data.status===false){
        toast.error(
            data.msg,toastoption
        )

    }
if(data.status===true){
    navigate("./home")
}
}
}
  return (
    
    <div>
        
        <form onSubmit={handleSubmit}>
            <p>{JSON.stringify(values,undefined,2)}</p>
    <div className="mb-3">
    <input type="text" className="form-control"
      
    placeholder="name"
    name="name"
    onChange={(e)=>handlechange(e)}
     />
    <input type="text" className="form-control"
     id="exampleInputEmail1" 
    placeholder="email"
    name="email"
    onChange={(e)=>handlechange(e)}
     aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>

    <input type="password" className="form-control"
     id="exampleInputPassword1"
     name="password"
     onChange={(e)=>handlechange(e)}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<ToastContainer/>

    
    
    </div>
  )
}


export default Reigister