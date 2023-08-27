import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';

const BlogCard = ({ title, url, author, datePublished, slug }) => {
	return (
		<div class="container">
			<div class="card">
				<div class="card-header">
					<Link to={'/posts/' + slug}>
						<img src={url} alt="rover" />
					</Link>
				</div>
				<div class="card-body">
					<span class="tag tag-teal">Technology</span>
					<h4>{title}</h4>
					<div class="user">
						<img src={author.avatar.url} alt="user" />
						<div class="user-info">
							<h5>{author.name}</h5>
							<small>{datePublished}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
