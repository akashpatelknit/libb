import { createSlice } from '@reduxjs/toolkit';
import { gql, GraphQLClient } from 'graphql-request';
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

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		post: {},
		value: 0,
	},
	reducer:{}
});


export default counterSlice.reducer;
