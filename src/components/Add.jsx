import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Add.css';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const options = [
    'First Year',
    'Second Year',
    'Third Year',
    'FInal Year',
    'MCA',
  ];
  const url='https://libraryserver.vercel.app';
  const branch = ['It', 'Cs', 'ECE', 'Mech', 'Civil', 'EL'];
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [branchname, setBranchname] = useState('');
  const [semester, setSemester] = useState('');
  const [subject, setSbject] = useState('');
  const [session, setSession] = useState('');
  const [imgurl, setUrl] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  useEffect(() => {
  
    if (imgurl) {
      fetch(`${url}/add`, {
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
          type,
          url: imgurl,
        }) 
      })
        .then((res) => res.json())
        .then(() => {
            window.alert('You have successfully uploaded an image!');
            setLoading(true)
            history(`/`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [imgurl]);

  const handleSubmit = (e) => {
  setLoading(true)
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

  

  return (
    <div className="container">
      <form action="" method="POST">
        <div className="formm">
          <div class="form-row">
            <div class="form-item">
              <label>Year</label>
              <select name="year" onChange={(e) => setYear(e.target.value)}>
                <option>Year</option>
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
              > <option>Branch</option>
                {branch.map((option, index) => {
                
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>

            <div class="form-item">
              <label>Semester</label>
              <input
                type="text"
                name="semester"
                min="1"
                onChange={(e) => setSemester(e.target.value)}
              />
            </div>
          </div>

          <div class="form-row">
           <div class="form-item">
              <label>Type</label>
             <select name="type" onChange={(e) => setType(e.target.value)}>
               <option >Type</option>
               <option >Book</option>                               
               <option >Exam</option>
               <option >CT</option>
              </select>
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
             
            <div className="form-item">
              {
               loading?<label>Uploading...</label>:<label>Upload</label>
              }
                
                <input type="submit" onClick={handleSubmit} />
              </div>
          </div>
        </div>
      </form>
     
    </div>
  );
};

export default Add;
