// Dependencies
import React from 'react'
import { bool } from 'prop-types'

// Components
import Link from 'next/link'

// Styles
import styles from './Logo.scss'

const Logo = props => {
  const { isotype = '', center = '' } = props

  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <img src="/images/isotype.png" />
        </a>
      </Link>
    </div>
  )
}

Logo.propTypes = {
  center: bool,
  isotype: bool
}

export default Logo
