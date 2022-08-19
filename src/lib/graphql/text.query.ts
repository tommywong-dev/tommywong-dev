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
			journeyDescription
			journeyTitle
			journeyNow
			letsTalkTitle
			letsTalkDescription
			socialInstagram
			socialTwitter
			socialEmail
			formName
			formEmail
			formMessage
			formCancel
			formSubmit
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
			journeyDescription
			journeyTitle
			journeyNow
			letsTalkTitle
			letsTalkDescription
			socialInstagram
			socialTwitter
			socialEmail
			formName
			formEmail
			formMessage
			formCancel
			formSubmit
		}
	}
`;
