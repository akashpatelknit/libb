import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Add.css';
import { useNavigate } from 'react-router-dom';

import M from 'materialize-css'
const Add = () => {
  const options = [
    'First Year',
    'Second Year',
    'Third Year',
    'FInal Year',
    'MCA',
  ];
  const branch = ['It', 'Cs', 'ECE', 'Mech', 'Civil', 'EL'];
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [branchname, setBranchname] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSbject] = useState('');
  const [session, setSession] = useState('');
  const [imgurl, setUrl] = useState('');
  const history = useNavigate();
  useEffect(() => {
  
    if (imgurl) {
      fetch('http://localhost:4000/add', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          year,
          branchname,
          semester,
          subject,
          session,
          url: imgurl,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history('/')
           }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [imgurl]);

  const handleSubmit = (e) => {
   e.preventDefault()
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'Library');
    data.append('cloud_name', 'dcgqtiqoh');
    fetch('https://api.cloudinary.com/v1_1/dcgqtiqoh/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(imgurl);
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const [session, setUserdata] = useState({
  //   year: '',
  //   semester: '',
  //   branch: '',
  //   subject: '',
  //   session: '',
  //   url:''
  // });

  //   const handleInput = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     console.log(name, value);
  //     setUserdata({ ...userdata, [name]: value });
  //   };

  //  const handleSubmit=async(e)=>{
  //    e.preventDefault()
  //    console.log('1',userdata)
  //      const data = new FormData();
  //     data.append('file', image);
  //     data.append('upload_preset', 'Library');
  //     data.append('cloud_name', 'dcgqtiqoh');
  //     await fetch('https://api.cloudinary.com/v1_1/dcgqtiqoh/image/upload', {
  //       method: 'post',
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) =>{
  //       //  console.log('se',userdata)
  //        setUserdata({...userdata,url:data.url}) ;
  //       //  console.log('th',userdata)
  //         console.log('upload to cloud')
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //       // console.log( 'fr',userdata)

  //      await fetch('http://localhost:4000/add',{
  //     method:"POST",
  //     body:JSON.stringify(userdata),
  //     headers:{
  //     'Content-Type':'application/json'
  //     }

  //     }).then(()=>{
  //     console.log('upload to db')
  //     })

  //  }

  return (
    <div className="container">
      <form action="" method="POST">
        <div className="formm">
          <div class="form-row">
            <div class="form-item">
              <label>Year</label>
              <select name="year" onChange={(e) => setYear(e.target.value)}>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            <div class="form-item">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                onChange={(e) => setSbject(e.target.value)}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <label>Branch</label>
              <select
                name="branch"
                onChange={(e) => setBranchname(e.target.value)}
              >
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
                onChange={(e) => setSemester(e.target.value)}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-item form-item-no-grow">
              <label>File</label>
              <input
                type="file"
                name="cover"
                class="book-cover filepond"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div class="form-item">
              <label>Session</label>
              <input
                type="text"
                name="session"
                onChange={(e) => setSession(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div class="form-row">
            <div className="form-item">
              <div class="form-item form-item-no-grow">
                <input type="submit" onClick={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </form>
      <img src={imgurl} alt="BigCo Inc. logo" />
    </div>
  );
};

export default Add;
