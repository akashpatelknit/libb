import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { gql, GraphQLClient } from 'graphql-request';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const graphcms = new GraphQLClient(
	'https://api-ap-south-1.hygraph.com/v2/cllffz1q5546101umad8oesvt/master'
);
// const QUERY = gql`
// 	query Post($slug: String!) {
// 		post(where: { slug: $slug }) {
// 			id
// 			title
// 			datePublished
// 			slug
// 			content {
// 				html
// 			}
// 			author {
// 				name
// 				avatar {
// 					url
// 				}
// 			}
// 			coverPhoto {
// 				id
// 				url
// 			}
// 		}
// 	}
// `;
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

const Slug = () => {
	const { slug } = useParams();
	const [post, setPost] = useState({});
	useEffect(() => {
		const getPost = async () => {
			const { posts } = await graphcms.request(QUERY);
			const post = posts.filter((p) => p.slug === slug);
			setPost(post[0]);
		};
		getPost();
		console.log(post);
	}, [slug]);
	return (
		<Stack>
			<Image src={post?.coverPhoto?.url} />
			<Box>
				<Image src={post?.author?.avatar?.url} />
				<Box>
					<Text>{post?.author?.name}</Text>
					<Text>{post?.datePublished}</Text>
				</Box>
			</Box>
			<Box></Box>
			<Text>{post?.title}</Text>
			<Box dangerouslySetInnerHTML={{ __html: post?.content?.html }}></Box>
		</Stack>
	);
};
export default Slug;
