import React from 'react';
import './Blog.scss';
import { gql, GraphQLClient } from 'graphql-request';
import BlogCard from './BlogCard';
import { useState, useEffect } from 'react';
const graphcms = new GraphQLClient(
	'https://api-ap-south-1.hygraph.com/v2/cllffz1q5546101umad8oesvt/master'
);
const QUERY = gql`
	{
		posts {
			id
			title
			datePublished
			slug
			content {
				html
			}
			author {
				name
				avatar {
					url
				}
			}
			coverPhoto {
				url
			}
		}
	}
`;

const Blog = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const getStaticProps = async () => {
			const { posts } = await graphcms.request(QUERY);
			setPosts(posts);
		};
		getStaticProps();
	}, []);

	return (
		<main>
			{posts.map((post) => (
				<BlogCard
					title={post.title}
					url={post.coverPhoto.url}
					author={post.author}
					key={post.id}
					datePublished={post.datePublished}
					slug={post.slug}
				/>
			))}
		</main>
	);
};

export default Blog;
