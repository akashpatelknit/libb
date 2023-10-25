import React from 'react';
import './Blog.scss';
import BlogCard from './BlogCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Partical from '../Partical/Partical';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	// useEffect(() => {
	// 	const getStaticProps = async () => {
	// 		const { posts } = await graphcms.request(QUERY);
	// 		setPosts(posts);
	// 	};
	// 	getStaticProps();
	// }, []);
	return (
		<motion.div className="blog__container">
			<Partical />
			<motion.div className="blog__heading">
				{/* <Heading heading="Blogs" /> */}
			</motion.div>
			<motion.div className="blog__description">
				{/* <Description description="Faucibus fringilla sed integer cursus tellus et, quis ultricies. Aliquam, faucibus arcu in laoreet ac elementum in eget." /> */}
			</motion.div>
			<motion.div className="blog">
				<div className="blog__left">
					<div className="blog__left__first">
						<img
							src="https://images.unsplash.com/photo-1698167646833-b705453b235e?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Blog"
						/>
						<div className="textContainer">
							<div className="blog__title">
								<span>
									Porttitor pharetra, consectetur viverra est
									nisl a, vulputate id...
								</span>
								<span>
									Dui massa sapien ornare leo. Sagittis,
									sollicitudin sed integer maecenas sit. Nibh
									suspendisse lectus hendrerit pretium...
								</span>
							</div>
							<div className="blog__date">
								<div>
									<span>13 Sept, 2021</span>
								</div>
								<div>
									<span>Technology</span>
								</div>
							</div>
						</div>
					</div>
					<div className="blog__left__second">
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
				</div>
				<div className="blog__right">
					<Link to="/write">
						<div className=" create__new__post">
							Create New Post
							<img src="/add.gif" alt="" />
						</div>
					</Link>
					<div className="blog__right__card">
						<Link>
							<div className="blog__right__first">
								<img
									src="https://images.unsplash.com/photo-1698133224386-4728147a3c3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Blog"
								/>
								<div className="textContainer">
									<div className="blog__title">
										<span>
											Porttitor pharetra, consectetur
											viverra est nisl a, vulputate id...
										</span>
									</div>
									<div className="blog__date">
										<div>
											<span>13 Sept, 2021</span>
										</div>
										<div>
											<span>Technology</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
						<Link>
							<div className="blog__right__first">
								<img
									src="https://images.unsplash.com/photo-1698133224386-4728147a3c3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Blog"
								/>
								<div className="textContainer">
									<div className="blog__title">
										<span>
											Porttitor pharetra, consectetur
											viverra est nisl a, vulputate id...
										</span>
									</div>
									<div className="blog__date">
										<div>
											<span>13 Sept, 2021</span>
										</div>
										<div>
											<span>Technology</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
						<Link>
							<div className="blog__right__first">
								<img
									src="https://images.unsplash.com/photo-1698133224386-4728147a3c3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Blog"
								/>
								<div className="textContainer">
									<div className="blog__title">
										<span>
											Porttitor pharetra, consectetur
											viverra est nisl a, vulputate id...
										</span>
									</div>
									<div className="blog__date">
										<div>
											<span>13 Sept, 2021</span>
										</div>
										<div>
											<span>Technology</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="feature_video">
						<div className="feature_video__title">
							<span>Featured Video</span>
						</div>
						<div className="feature_video__video">
							{/* <iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/MyeEW7RJNSw?si=o5k_obF1td9hvQJx"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe> */}
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div className="join"></motion.div>
		</motion.div>
	);
};

export default Blog;
