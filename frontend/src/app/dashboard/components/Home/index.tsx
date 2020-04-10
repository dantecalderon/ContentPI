// Dependencies
import React, { FC, ReactElement, useContext, useEffect } from 'react'
import Head from 'next/head'

// Shared components
import Header from '@shared/components/layouts/main/Header'
import Content from '@shared/components/layouts/main/Content'
import Sidebar from '@shared/components/layouts/main/Sidebar'

const Home: FC = (): ReactElement => {
  return (
    <>
      <Sidebar />

      <Content>
        <Header />
      </Content>
    </>
  )
}

export default Home
