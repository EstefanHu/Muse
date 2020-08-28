import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import styles from '../../styles/create/plot.scss'

const CSRMap = dynamic(() => import('../../components/Map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default function Plot() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Plot - :Muse</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css'
          rel='stylesheet'
        />
      </Head>

      <main>
        <h1>Plot</h1>
        <section>
          <CSRMap />
        </section>
      </main>
    </div>
  )
}