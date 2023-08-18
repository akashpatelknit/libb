import { Image, Stack, Box, HStack, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';

const BlogCard = ({ title, url, author, datePublished, slug }) => {
	return (
		<Stack
			width={'70%'}
			borderRadius={'1rem'}
			className="blog-card"
			margin={'auto'}
		>
			<Box width={'100%'}>
				<Link to={'/posts/' + slug}>
					<Image src={url} width={'100%'} borderRadius={'1rem'} />
				</Link>
			</Box>
			<Box textAlign={'center'}>
				<Text fontWeight={'bold'}> {title}</Text>
			</Box>
			<HStack justifyContent={'space-evenly'} padding={'10px'}>
				<HStack
					justifyContent={'flex-start'}
					alignItems={'center'}
					width={'60%'}
				>
					<Image
						src={author.avatar.url}
						width={'15%'}
						borderRadius={'1rem'}
					/>
					<Text> {author.name}</Text>
				</HStack>
				<HStack justifyContent={'center'}>
					<Text>{datePublished}</Text>
				</HStack>
			</HStack>
		</Stack>
	);
};

export default BlogCard;
