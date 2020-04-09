// Dependencies
import React, { FC, ReactElement, useState } from 'react'

// Components
import { Icon } from 'fogg-ui'

// Shared components
import Modal from '@shared/components/layouts/main/Modal'

// Styles
import styles from './Cards.scss'

const Cards: FC = (): ReactElement => {
  // Local state
  const [showModal, setShowModal] = useState(false)

  // Fetch from database
  const title = 'My Apps'

  const apps = [
    {
      name: 'project 1',
      icon: 'fas fa-text-width',
      color: '#0d9a67'
    },
    {
      name: 'project 2',
      icon: 'fas fa-text-width',
      color: '#222'
    },
    {
      name: 'project 2',
      icon: 'fas fa-text-width',
      color: '#222'
    },
    {
      name: 'project 2',
      icon: 'fas fa-text-width',
      color: '#222'
    },
    {
      name: 'project 2',
      icon: 'fas fa-text-width',
      color: '#222'
    },
    {
      name: 'project 1',
      icon: 'fas fa-text-width',
      color: '#0d9a67'
    },
    {
      name: 'project 1',
      icon: 'fas fa-text-width',
      color: '#0d9a67'
    }
  ]

  // Method to open modal
  const handleModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <section className={styles.container}>
        <h1>{title}</h1>

        <ul>
          {apps.map((app, i) => {
            return (
              <li key={i}>
                <section className={styles.card} onClick={handleModal}>
                  <section
                    className={styles.app}
                    style={{ backgroundColor: app.color }}
                  >
                    {app.name.substring(0, 2)}
                  </section>
                  <span>{app.name}</span>
                </section>
              </li>
            )
          })}

          <li>
            <section className={styles.card}>
              <section className={styles.app}>
                <Icon type="fas fa-plus" />
              </section>

              <span>Create new App</span>
            </section>
          </li>
        </ul>
      </section>
      {showModal ? <Modal /> : ''}
    </>
  )
}

export default Cards
