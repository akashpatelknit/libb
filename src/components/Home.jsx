import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './Home.scss';
import Row from './Row/Row';

const Home = () => {
const url='https://libraryserver.vercel.app';
  const [book, setbook] = useState([]);
  const [exam, setexam] = useState([]);
  const [ct, setct] = useState([]);
  useEffect(() => {
    const fetchbook = async () => {
      let { data } = await axios.get(`${url}/get`);
      data=data.filter(b=>b.type==='Book')
      setbook(data);
    };
    const fetchexam = async () => {
      let { data } = await axios.get(`${url}/get`);
      data=data.filter(b=>b.type==='Exam')
      setexam(data);
    };
    const fetchct = async () => {
      let { data } = await axios.get(`${url}/get`);
      data=data.filter(b=>b.type==='CT')
      setct(data);
    };

    fetchbook();
    fetchexam();
    fetchct();
  }, []);

  return (
    <>
    <section className="home">
      <Row title={'Books'} arr={book} />
      <Row title={'Exam Papers'} arr={exam} />
      <Row title={'CT Papers'} arr={ct} />
    
    </section>
     
     </>
  );
};

export default Home;
