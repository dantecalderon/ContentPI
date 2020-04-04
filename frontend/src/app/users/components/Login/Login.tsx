// Dependencies
import React, { FC, ReactElement, useState, useContext, useEffect } from 'react'
import { Alert, DarkButton, PrimaryButton, Input, RenderIf } from 'fogg-ui'
import { cx, redirectTo } from 'fogg-utils'

// Interfaces
import { iUser } from '@interfaces'
import { FormContext } from '@contexts/form'

// Components
import Logo from '@shared/components/layouts/main/Logo'

// Styles
import styles from './Login.scss'

// Interfaces
interface iProps {
  login(input: any): any
  currentUrl: string
}

const Login: FC<iProps> = ({ login, currentUrl }): ReactElement => {
  // States
  const [ready, setReady] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [invalidLogin, setInvalidLogin] = useState(false)

  // Contexts
  const { onChange, values } = useContext(FormContext)

  // Methods
  const handleLogin = async (user: iUser) => {
    const response = await login(user)

    if (response.error) {
      setInvalidLogin(true)
      setErrorMessage(response.message)
    } else {
      redirectTo(currentUrl || '/')
    }
  }

  // Render
  return (
    <>
      <RenderIf isTrue={invalidLogin}>
        <Alert danger center flat>
          {errorMessage}
        </Alert>
      </RenderIf>

      <div className={styles.login}>
        <div className={cx(styles.wrapper, ready ? styles.ready : '')}>
          <div className={styles.form}>
            <div className={styles.logo}>
              <Logo />
            </div>

            <Input
              autoComplete="off"
              type="email"
              className={styles.email}
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={values.email}
            />

            <Input
              autoComplete="off"
              type="password"
              className={styles.password}
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={values.password}
            />

            <div className={styles.actions}>
              <div className={styles.left}>
                <DarkButton name="login" onClick={() => handleLogin(values)}>
                  Login
                </DarkButton>
                &nbsp;
                <PrimaryButton name="register">Register</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
