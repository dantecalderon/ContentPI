// Dependencies
import React, { FC, ReactElement, useContext } from 'react'
import Head from 'next/head'

// Contexts
import { UserContext } from '@contexts/user'

// Components
import App from './App'

// Styles
import styles from './Layout.scss'

const Layout: FC = (): ReactElement => {
  const { user } = useContext(UserContext)

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="title" content="Dashboard" />
      </Head>

      <div className={styles.layout}>
        <App />
      </div>
    </>
  )
}

export default Layout