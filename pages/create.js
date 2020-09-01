import Head from 'next/head'
import styles from '../styles/create.scss'

import TextForm from '../components/create/TextForm'
import ImageForm from '../components/create/ImageForm'
import PlotForm from '../components/create/PlotForm'

export default function Create() {
  const [entry, setEntry] = React.useState({})

  const addNode = newEntry => setEntry({ ...entry, newEntry })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create - :Muse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.createMain}>
        <ul>
          {Object
            .keys(entry)
            .map(
              (keyName, keyIndex) => {
                <TrackNode type='text' />
              })}
        </ul>
      </main>
    </div>
  )
}

const TrackNode = ({ type }) => {

  const chooseClass = type => {
    switch (type) {
      case 'text':
        return 'textTrackNode'
      case 'image':
        return 'imageTrackNode'
      case 'video':
        return 'videoTrackNode'
      case 'audio':
        return 'audioTrackNode'
      default:
        return 'textTrackNode'
    }
  }

  return <li className={() => chooseClass(type)}>
    <p>{type.substring(0, 1)}</p>
  </li>
}