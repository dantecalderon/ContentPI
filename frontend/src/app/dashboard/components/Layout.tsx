// Dependencies
import React, { FC, ReactElement } from 'react'
import Head from 'next/head'

// Components
import Apps from './Apps'
import Home from './Home'

// Styles
import styles from './Layout.scss'

// Interface
interface iProps {
  moduleName?: string
}

const Layout: FC<iProps> = ({ moduleName = '' }): ReactElement => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="title" content="Dashboard" />
      </Head>

      <div className={styles.layout}>
        {moduleName === 'Home' && <Home />}
        {!moduleName && <Apps />}
      </div>
    </>
  )
}

export default Layout
