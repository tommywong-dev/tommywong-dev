import { gql } from 'graphql-request';

export const getEnTextsQuery = gql`
	query GetEnTexts {
		texts(locales: en) {
			aboutDescription
			aboutMarkdown
			aboutTitle
			headerDescription
			headerTitle
			techDescription
			techTitle
		}
	}
`;

export const getZhTextsQuery = gql`
	query GetZhTexts {
		texts(locales: zh) {
			aboutDescription
			aboutMarkdown
			aboutTitle
			headerDescription
			headerTitle
			techDescription
			techTitle
		}
	}
`;
