import Head from 'next/head'

import Auth from '../components/landing/auth'

import styles from '../styles/index.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Auth />
      </main>
    </div>
  )
}