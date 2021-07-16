import React from 'react'
import Head from 'next/head'
import Main from 'components/Main'
import GlobalStyles from 'styles/global'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href="public/fav.png" />
        <link rel="apple-touch-icon" href="/public/fav.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Main />
    </>
  )
}
