import { gql } from 'graphql-request';

export const createMessageMutation = gql`
	mutation CreateMessage($data: MessageCreateInput!) {
		createMessage(data: $data) {
			name
			email
			message
		}
	}
`;
