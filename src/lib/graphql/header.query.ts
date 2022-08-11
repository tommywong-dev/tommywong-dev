import { gql } from 'graphql-request';

export const getEnHeaderQuery = gql`
	query GetEnHeader {
		headers(locales: en) {
			title
			description
		}
	}
`;

export const getZhHeaderQuery = gql`
	query GetZhHeader {
		headers(locales: zh) {
			title
			description
		}
	}
`;
