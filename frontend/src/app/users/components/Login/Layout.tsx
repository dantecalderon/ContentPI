// Dependencies
import React, { FC, ReactElement, useContext } from 'react'
import Head from 'next/head'

// Contexts
import { UserContext } from '@contexts/user'
import { FormContext } from '@contexts/form'

// Components
import Login from './Login'

// Styles
import './Layout.scss'

interface iProps {
  currentUrl: string
}

const Layout: FC<iProps> = ({ currentUrl }): ReactElement => {
  const { login } = useContext(UserContext)
  const { form } = useContext(FormContext)

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="title" content="Login" />
      </Head>
      <Login login={login} currentUrl={currentUrl} form={form} />}
    </>
  )
}

export default Layout
