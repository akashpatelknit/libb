import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.scss'

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;


const Row = ({ title, arr = [] }) => (
    <div className="row">
        <h2>{title}</h2>

        <div>
            {arr.map((item, index) => (<div className='card2'>
                <Card key={index} img={`${item.url}`} />
                 <a href={item.url} key={index} target='_blank' rel="noreferrer">Download</a>
                 </div>
            ))}
        </div>
    </div>
);
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      
         const {data}= await axios.get(`http://localhost:4000/get`);
        setUpcomingMovies(data);

      console.log(data);
      
      console.log('2upcomingMovies**', upcomingMovies);
    };

    fetchUpcoming();
  }, []);

  return (
   <section className="home">
            {/* <Row title={"Now Playing"} arr={nowPlayingMovies} /> */}
            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Upcoming"} arr={upcomingMovies} />
            {/* <Row title={"Top Rated"} arr={topRatedMovies} /> */}
            {/* <Row title={"Popular"} arr={popularMovies} /> */}

           
        </section>
  );
};

export default Home;
