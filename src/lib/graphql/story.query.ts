import { gql } from 'graphql-request';

export const getEnStoriesQuery = gql`
	query GetEnStories {
		stories(locales: en, orderBy: startDate_ASC) {
			endDate
			startDate
			title
			nextButtonLabel
			description
			thumbnail {
				url
			}
		}
	}
`;

export const getMsStoriesQuery = gql`
	query GetMsStories {
		stories(locales: zh, orderBy: startDate_ASC) {
			endDate
			startDate
			title
			nextButtonLabel
			description
			thumbnail
		}
	}
`;
