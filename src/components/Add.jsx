import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Add.css';

const Add = () => {
  const options = [
    'First Year',
    'Second Year',
    'Third Year',
    'FInal Year',
    'MCA',
  ];
  const branch=['It','Cs','ECE','Mech','Civil','EL']
  const [image, setImage] = useState('');
  const [userdata, setUserdata] = useState({
    year: '',
    semester: '',
    branch: '',
    subject: '',
    session: '',
    url:''
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserdata({ ...userdata, [name]: value });
  };
 
 const handleSubmit=async(e)=>{
   e.preventDefault()
     const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'Library');
    data.append('cloud_name', 'dcgqtiqoh');
    await fetch('https://api.cloudinary.com/v1_1/dcgqtiqoh/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) =>{ console.log(data.url)
       setUserdata({...userdata,url:data.url})
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(userdata)
     const response=await fetch('http://localhost:4000/add',{
    method:"POST",
    body:JSON.stringify(userdata),
    headers:{
    'Content-Type':'application/json'
    }
   
    })
    const da=await response.json();
   console.log( "hadfkhdshfasl",da)
 }
 

  return (
    <div className="container">
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="formm">
          <div class="form-row">
            <div class="form-item">
              <label>Year</label>
              <select name="year" onChange={handleInput}>
                
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            <div class="form-item">
              <label>Subject</label>
              <input type="text" name="subject" onChange={handleInput} />
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <label>Branch</label>
             <select name="branch" onChange={handleInput}>
                {branch.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            
            <div class="form-item">
              <label>Semester</label>
              <input
                type="number"
                name="semester"
                min="1"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-item form-item-no-grow">
              <label>File</label>
              <input type="file" name="cover" class="book-cover filepond" onChange={e=>setImage(e.target.files[0])}/>
            </div>
            <div class="form-item">
              <label>Session</label>
              <input type="text" name="session" onChange={handleInput} />
            </div>
          </div>
          <br />
          <div class="form-row">
            <div className="form-item">
              <div class="form-item form-item-no-grow">
                <input  type="submit" />
              </div>
            </div>
          </div>
        </div>

      
      </form>
      <img src={userdata.url} alt="BigCo Inc. logo"/>
    </div>
  );
};

export default Add;
