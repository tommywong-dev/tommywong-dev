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
			formNameError
			formNamePlaceholder
			formEmail
			formEmailError
			formEmailInvalid
			formEmailPlaceholder
			formMessage
			formMessageError
			formMessagePlaceholder
			formCancel
			formSubmit
			formSubmitSuccess
			formSubmitFailed
			footerResume
			footerCopyright
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
			formNameError
			formNamePlaceholder
			formEmail
			formEmailError
			formEmailInvalid
			formEmailPlaceholder
			formMessage
			formMessageError
			formMessagePlaceholder
			formCancel
			formSubmit
			formSubmitSuccess
			formSubmitFailed
			footerResume
			footerCopyright
		}
	}
`;
