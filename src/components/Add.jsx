import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Add.css'

const Add = () => {
     const [year,setyear]=useState("")
     const inputhandle=(e)=>{
       e.preventDefault() 
       setyear(e.target.value)
     }
     const  formsubmit=()=>{

       console.log(year)
     }
     
  return (
    <div className='container' >
      <div className="form">
       <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Year</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group">
   <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1" onChange={inputhandle}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={formsubmit}>Submit</button>
</form>
      </div>
    </div>
  )
}

export default Add