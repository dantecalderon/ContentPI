// Dependencies
import React, { FC, ReactElement, useContext, useEffect } from 'react'
import Head from 'next/head'

// Contexts
import { AppContext } from '@contexts/app'

// Mutations
import GET_APPS_QUERY from '@graphql/app/app.query'

// Shared components
import Logo from '@shared/components/layouts/main/Logo'
import Cards from '@shared/components/layouts/main/Cards'

// Styles
import styles from './Apps.scss'

const Apps: FC = (): ReactElement => {
  // Contexts
  const { get, state } = useContext(AppContext)

  // Effects
  useEffect(() => {
    if (!state.getApps) {
      fetch()
    }
  }, [state])

  // Methods
  const fetch = async () => {
    await get({
      query: GET_APPS_QUERY
    })
  }

  if (!state.getApps) {
    return <div />
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="title" content="Dashboard" />
      </Head>

      <div className={styles.apps}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        <Cards items={state.getApps} />
      </div>
    </>
  )
}

export default Apps
