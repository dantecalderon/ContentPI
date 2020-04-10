// Dependencies
import React, { FC, ReactElement, useState } from 'react'

// Components
import { Icon, Modal } from 'fogg-ui'
import Link from '@shared/components/ui/Link'

// Styles
import styles from './Cards.scss'

// Interfaces
interface iProps {
  items: any[]
}

const Cards: FC<iProps> = ({ items }): ReactElement => {
  // Local state
  const [isOpen, setIsOpen] = useState(false)

  // Fetch from database
  const title = 'My Apps'

  // Method to open modal
  const handleModal = () => setIsOpen(!isOpen)

  return (
    <>
      <Modal
        isOpen={isOpen}
        label="Create new App"
        options={{
          position: 'center',
          width: '400px'
        }}
        onClose={handleModal}
      >
        <p>Content</p>
      </Modal>

      <section className={styles.container}>
        <h1>{title}</h1>

        <ul>
          {items.map((app, i) => {
            return (
              <li key={i}>
                <Link href={`/dashboard/${app.id}`}>
                  <section className={styles.card} title={app.description}>
                    <section
                      className={styles.app}
                      style={{ backgroundColor: app.icon }}
                    >
                      {app.appName.substring(0, 2)}
                    </section>
                    <span>{app.appName}</span>
                  </section>
                </Link>
              </li>
            )
          })}

          <li>
            <section className={styles.card} onClick={handleModal}>
              <section className={styles.app}>
                <Icon type="fas fa-plus" />
              </section>

              <span>Create new App</span>
            </section>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Cards
