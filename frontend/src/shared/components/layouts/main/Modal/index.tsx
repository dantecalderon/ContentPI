// Dependencies
import React, { FC, ReactElement, useState } from 'react'

// Styles
import styles from './Modal.scss'

const Modal: FC = (): ReactElement => {
  // Local state
  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(true)
  }

  return (
    <section className={styles.modalContainer}>
      <section className={styles.mainContainer}>
        <section>x</section>
        Im the modal
      </section>
    </section>
  )
}

export default Modal
