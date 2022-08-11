import { gql } from "graphql-request";

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
