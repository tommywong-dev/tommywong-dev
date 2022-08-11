import { gql, GraphQLClient } from 'graphql-request';

export const getEnAboutQuery = gql`
	query GetEnAbout {
		abouts(locales: en) {
			title
			description
			content
		}
	}
`;

export const getZhAboutQuery = gql`
	query GetZhAbout {
		abouts(locales: zh) {
			title
			description
			content
		}
	}
`;

const graphQLClient = new GraphQLClient(import.meta.env.VITE_HYGRAPH_CONTENT_API);

export default graphQLClient;
