import Head from 'next/head'
import styles from '../styles/create.module.sass'

import TextForm from '../components/create/TextForm'
import ImageForm from '../components/create/ImageForm'
import AudioForm from '../components/create/AudioForm'
import VideoForm from '../components/create/VideoForm'
import PlotForm from '../components/create/PlotForm'

export default function Create() {
  const [entry, setEntry] = React.useState({})
  const [addingNode, setAddingNode] = React.useState(false)
  const [newNodeType, setNewNodeType] = React.useState(null)

  const addNode = newEntry => setEntry({ ...entry, newEntry })

  const startNode = type => {
    setNewNodeType(type)
    setAddingNode(true)
  }

  const renderNodeForm = () => {
    switch (newNodeType) {
      case 'text':
        return <TextForm
          addNode={addNode}
          setAddingNode={setAddingNode}
        />
      case 'image':
        return <ImageForm
          addNode={addNode}
          setAddingNode={setAddingNode}
        />
      case 'audio':
        return <AudioForm
          addNode={addNode}
          setAddingNode={setAddingNode}
        />
      case 'video':
        return <VideoForm
          addNode={addNode}
          setAddingNode={setAddingNode}
        />
      case 'plot':
        return <PlotForm
          addNode={addNode}
          setAddingNode={setAddingNode}
        />
    }
  }

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
        {
          !addingNode ?
            <section>
              <span>
                <button onClick={() => startNode('text')}>Add Text</button>
                <button onClick={() => startNode('image')}>Add Image</button>
                <button onClick={() => startNode('audio')}>Add Audio</button>
                <button onClick={() => startNode('video')}>Add Video</button>
              </span>
            </section>
            : renderNodeForm()
        }
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