// Interfaces
import {
  iUser,
  iCreateUserInput,
  iLoginInput,
  iAuthPayload,
  iModels
} from '../../interfaces'

// Utils
import { doLogin } from '../../utils/auth'

export default {
  Query: {
    getUsers: (
      _: object,
      _args: object,
      { models }: { models: iModels }
    ): iUser[] => models.User.findAll()
  },
  Mutation: {
    createUser: (
      _: object,
      { input }: { input: iCreateUserInput },
      { models }: { models: iModels }
    ): iUser => models.User.create({ ...input }),
    login: (
      _: object,
      { input }: { input: iLoginInput },
      { models }: { models: iModels }
    ): iAuthPayload => doLogin(input.email, input.password, models)
  }
}
