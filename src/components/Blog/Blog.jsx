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
			{/* <Link to="/blog-post">Create Post</Link> */}
			<div className="blog">
				<div className="blog-left">
					<div className="blog-item">
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
					</div>
				</div>
				{/* <div className="blog-right">
					<div className='authors'>
						<Heading>Authors</Heading>
						<div>
							<Image
								src={
									'https://media.graphassets.com/2usHOOHTNmXoLEgPKO2F'
								}
							/>
							<Text>Akash Patel</Text>
						</div>
					</div>
				</div> */}
			</div>
		</main>
	);
};

export default Blog;
