// Interfaces
import { iApp, iCreateAppInput } from '../../interfaces'

export default {
  Query: {
    getApps: (_: object, _args: object, models: any): iApp[] =>
      models.App.findAll()
  },
  Mutation: {
    createApp: (
      _: object,
      { input }: { input: iCreateAppInput },
      models: any
    ): iApp => models.App.create({ ...input })
  }
}
