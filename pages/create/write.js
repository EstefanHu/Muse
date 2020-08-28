import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../../styles/create/write.scss'

export default function Home() {
  const [title, setTitle] = React.useState("")
  const [pitch, setPitch] = React.useState("")
  const [body, setBody] = React.useState("")

  const onSubmit = e => {
    e.preventDefault()
    console.log(body)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Write - :Muse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create Post</h1>
        <form onSubmit={onSubmit}>
          <span>
            <label>Title:</label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <p>{title.length}/50</p>
          </span>

          <span>
            <label>Pitch:</label>
            <input
              name="pitch"
              type="text"
              value={pitch}
              onChange={e => setPitch(e.target.value)}
            />
            <p>{pitch.length}/280</p>
          </span>

          <span>
            <label>Body:</label>
            <textarea
              name="body"
              type="text"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
            <p>{body.length}/50,000</p>
          </span>

          <button type="submit">Next</button>
          <Link href="./plot">
            <a>Plot</a>
          </Link>
        </form>
      </main>
    </div>
  )
}