// Dependencies
import { gql } from 'apollo-boost'

export default gql`
  mutation createApp($appName: String!, $icon: String!, $description: String!) {
    createApp(
      input: { appName: $appName, icon: $icon, description: $description }
    ) {
      appName
      id
      icon
      description
    }
  }
`
