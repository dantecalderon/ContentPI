// Dependencies
import React, { FC, ReactElement } from 'react'

// Components
import { Icon } from 'fogg-ui'

// Styles
import styles from './Cards.scss'

const Cards: FC = (): ReactElement => {
  // As props?
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
    }
  ]

  return (
    <section className={styles.container}>
      <h1>{title}</h1>

      <ul>
        {apps.map((app, i) => {
          return (
            <li key={i}>
              <section className={styles.card}>
                <span
                  className={styles.app}
                  style={{ backgroundColor: app.color }}
                >
                  {app.name.substring(0, 2)}
                </span>
                <span>{app.name}</span>
              </section>
            </li>
          )
        })}

        <li>
          <section className={styles.card}>
            <Icon type="fas fa-plus" />
            <span>Create new App</span>
          </section>
        </li>
      </ul>
    </section>
  )
}

export default Cards
