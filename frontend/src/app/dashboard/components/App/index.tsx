// Dependencies
import React, { FC, ReactElement, useContext } from 'react'
import Head from 'next/head'

// Contexts
import { UserContext } from '@contexts/user'

// Shared components
import Logo from '@shared/components/layouts/main/Logo'
import Cards from '@shared/components/layouts/main/Cards'

// Styles
import styles from './App.scss'

const Layout: FC = (): ReactElement => {
  const { user } = useContext(UserContext)

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="title" content="Dashboard" />
      </Head>

      <div className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>
        </div>

        <Cards />
      </div>
    </>
  )
}

export default Layout
