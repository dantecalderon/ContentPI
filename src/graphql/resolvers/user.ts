// Interfaces
import { iUser, iCreateUserInput } from '../../interfaces'

// Utils
import { doLogin } from '../../utils/auth'

export default {
  Query: {
    getUsers: (
      _: object,
      _args: object,
      { models }: { models: any }
    ): iUser[] => {
      return models.User.findAll()
    }
  },
  Mutation: {
    createUser: (
      _: object,
      { input }: { input: iCreateUserInput },
      { models }: { models: any }
    ): iUser => {
      return models.User.create({ ...input })
    }
  }
}
