import { gql } from 'graphql-request';

export const getEnTechsQuery = gql`
	query GetEnTechs {
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
	query GetZhTechs {
		techs(locales: zh) {
			icon {
				url
			}
			title
			description
		}
	}
`;
