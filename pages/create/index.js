import Head from 'next/head'
import styles from '../../styles/create/index.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li><a href='./create/write'>Write</a></li>
        </ul>
      </main>
    </div>
  )
}