import { Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Slug from './Post/Slug';

const BlogCard = ({ title, url, author, datePublished, slug }) => {
	return (
		<Stack>
			<Link to={'/posts/' + slug}>
				<Image src={url} />
			</Link>
			<h2> {title}</h2>
			<p> {author.name}</p>
			<Image src={author.avatar.url} />
			<span>{datePublished}</span>
			<Slug />
		</Stack>
	);
};

export default BlogCard;
