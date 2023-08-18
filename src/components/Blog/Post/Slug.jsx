import {
	Box,
	Heading,
	Image,
	Stack,
	Text,
	HStack,
	VStack,
} from '@chakra-ui/react';
import { gql, GraphQLClient } from 'graphql-request';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
		<Stack width={['80%', '80%']} margin={'auto'} mt={'1rem'}>
			<Box width={'100%'} margin={'auto'}>
				<Image
					src={post?.coverPhoto?.url}
					width={'100%'}
					margin={'auto'}
					borderRadius={'1rem'}
				/>
			</Box>

			<HStack
				display={'flex'}
				justifyContent={'space-evenly'}
				alignItems={'center'}
			>
				<Box width={'50%'}>
					<Image
						src={post?.author?.avatar?.url}
						width={['20%', '25%']}
						borderRadius={'60%'}
					/>
				</Box>
				<Box width={'50%'} textAlign={'end'}>
					<Text fontSize={'sm'} fontWeight={'bold'}>
						Author: {post?.author?.name}
					</Text>
					<Text>Date-Posted: {post?.datePublished}</Text>
				</Box>
			</HStack>
			<hr />
			<Heading>{post?.title}</Heading>
			<Box
				width={'100%'}
				margin={'auto'}
				overflowX={'scroll'}
				dangerouslySetInnerHTML={{ __html: post?.content?.html }}
			></Box>
		</Stack>
	);
};
export default Slug;
