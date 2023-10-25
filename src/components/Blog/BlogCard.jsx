import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({ title, url, author, datePublished }) => {
	title =
		'The chief technology officer (CTO) is the individual within an organization who oversees the current technology and creates relevant policy. A CTO should have the busine';
	author = 'Author Name';
	datePublished = 'Date Published';
	url =
		'https://images.unsplash.com/photo-1698167646833-b705453b235e?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	return (
		<Link to="/blog">
			<div className="blog-card">
				<div className="blog__card__image">
					<img src={url} alt="Blog" className="blog-image" />
				</div>
				<div className="textContainer">
					<div className="blog-title">
						<span>{title}</span>
					</div>
					<div className="blog-date">
						<span>{author}</span>
						<span>{datePublished}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
