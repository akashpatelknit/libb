import React, { useState,useEffect } from 'react';
// import './Exam.css';
import Row from '../Row/Row';
import axios from 'axios'

const Book = () => {
  const options = [
    'First Year',
    'Second Year',
    'Third Year',
    'FInal Year',
    'MCA',
  ];
  const branch = ['It', 'Cs', 'ECE', 'Mech', 'Civil', 'EL'];
  const [year, setYear] = useState('');
  const [branchname, setBranchname] = useState('');
  const [semester, setSemester] = useState();
  const [subject, setSbject] = useState('');
  const [ys,setYs]=useState([]);
  // const [type, setType] = useState('');
  const type='Book'
  const [search,setsearch]=useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([]);
      useEffect(() => {
        const fetchUpcoming = async () => {
          let { data } = await axios.get(`http://localhost:4000/get`);
          data=data.filter(d=>d.type===type)
          setUpcomingMovies(data);
          let sub=data.map(d=>d.subject).filter(s=> s!==undefined && s!=='')
          sub=[...new Set(sub)]
          setYs(sub)
          // console.log(sub)
        };

        fetchUpcoming();
      }, []);


      const handleSubmit = (e) => {
        e.preventDefault()
        const data=upcomingMovies.filter(d=>d.year===year&&d.subject===subject&&d.branch===branchname && d.semester===semester)
        setsearch(data)
      };

  return (<>
   <div className="main">
    <section>
      <form onSubmit={handleSubmit}>
       
          <div class="form-row">
            <div class="form-item">
              <label>Year</label>
              <select name="year" onChange={(e) => setYear(e.target.value)} >
                <option value="">Year</option>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            <div class="form-item">
              <label>Subject</label>
             <select name="subject" onChange={(e) => setSbject(e.target.value)} >
                <option value="">Subject</option>
                {ys.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
             <div class="form-item">
              <label>Branch</label>
              <select
                name="branch"
                onChange={(e) => setBranchname(e.target.value)}
              ><option value="">Branch</option>
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
            {/* <div class="form-item">
              <label>Type</label>
             <select name="type" onChange={(e) => setType(e.target.value)}>
               <option >Type</option>
               <option >Book</option>                               
               <option >Exam</option>
               <option >CT</option>
              </select>
            </div> */}
            <div className="form-item">
              
                <label>Search</label>
                <input type="submit"  />
              
            </div>
          </div>
          

      </form>
    </section>
    </div>
    <section className="home">
      <Row title={'Recentaly Added'} arr={upcomingMovies} />
      <Row title={'Search Results'} arr={search} />
      
    </section>
    </>
  );
};

export default Book;
