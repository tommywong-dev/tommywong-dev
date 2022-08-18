import { gql } from 'graphql-request';

export const getEnTechsQuery = gql`
	query GetEnTechsQuery {
		techs(locales: en) {
			icon {
				url
			}
			title
			description
		}
	}
`;

export const getZhTechsQuery = gql`
	query GetZhTechsQuery {
		techs(locales: zh) {
			icon {
				url
			}
			title
			description
		}
	}
`;
