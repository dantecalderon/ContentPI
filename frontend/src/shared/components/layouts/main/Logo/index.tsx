// Dependencies
import React, { ReactElement } from 'react'

// Components
import Link from 'next/link'

// Styles
import styles from './Logo.scss'

const Logo = (): ReactElement => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img alt="Logo" src="/images/logo.png" />
        </a>
      </Link>
    </div>
  )
}

export default Logo
