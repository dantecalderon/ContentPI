// Dependencies
import React, { FC, createContext, useState, ReactElement } from 'react'
import { useApolloClient } from 'react-apollo-hooks'
import { getGraphQlError, getQueryName } from 'fogg-utils'

interface iAppContext {
  get(options: any): any
  state: any
}

interface iProps {
  children: ReactElement
}

export const AppContext = createContext<iAppContext>({
  get: () => null,
  state: {}
})

const AppProvider: FC<iProps> = ({ children }): ReactElement => {
  const { query: queryFn, mutate } = useApolloClient()
  const [state, setState] = useState({})

  async function get(options: any) {
    const { query, variables = {} } = options

    const queryName = getQueryName(query)

    try {
      const { data } = await queryFn({
        query,
        variables
      })

      if (data) {
        setState({
          [queryName]: data[queryName]
        })
        return data
      }
    } catch (err) {
      return getGraphQlError(err)
    }
  }

  const context = {
    get,
    state
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export default AppProvider
