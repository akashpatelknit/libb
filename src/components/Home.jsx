import React, { useMemo, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import Lottie from 'lottie-react'
import 'aos/dist/aos.css';

import Hero from './Hero/Hero';
import './Home.scss';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { features } from '../data';
const Home = () => {
	// const url = 'https://libraryserver.vercel.app';
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			delay: 100,
		});
	}, []);
	return (
		<>
			<section className="home">
				<Hero />
				<div className="home-secton">
					<div className="home-item">
						{features.map((item) => {
							return (
								<div className="item" key={item.id}>
									<div
										className="item-image"
										data-aos={item.data_aos}
									>
										<Lottie  animationData={item.image}/>
									</div>
									<div className="item-text">
										<h2>{item.title}</h2>
										<hr />
										<p>{item.description}</p>
										<Link to={item.link}>
											<Button className="button">
												Checkout
											</Button>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
