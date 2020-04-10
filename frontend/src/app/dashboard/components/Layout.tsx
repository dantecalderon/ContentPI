// Dependencies
import React, { FC, ReactElement, useContext } from 'react'
import Head from 'next/head'

// Contexts
import { UserContext } from '@contexts/user'

// Components
import App from './Apps'
import Home from './Home'

// Styles
import styles from './Layout.scss'

// Interfaces
interface iProps {
  moduleName?: string
}

const Layout: FC<iProps> = ({ moduleName = '' }): ReactElement => {
  const { user } = useContext(UserContext)

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="title" content="Dashboard" />
      </Head>

      <div className={styles.layout}>
        {moduleName === 'Home' && <Home />}
        {!moduleName && <App />}
      </div>
    </>
  )
}

export default Layout
