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

  const [track, setTrack] = React.useState([])

  const addNode = newEntry => setEntry({ ...entry, newEntry })

  const startNode = type => {
    setNewNodeType(type)
    setAddingNode(true)
  }

  const reviewNode = idx => {
    console.log(idx)
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

  React.useEffect(() => {
    const initiateNewNode = document.getElementById('initiateNewNodeId')
    const newNodeForm = document.getElementById('newNodeFormWrapperId')
    const openNewNodeForm = () => {
      newNodeForm.classList.add('create_createActive')
    }
    initiateNewNode.addEventListener('click', openNewNodeForm)

    return () => initiateNewNode.removeEventListener('click', openNewNodeForm)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create - :Muse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.createMain}>
        <div className="progressTracker">
          <div className="track">
            {track.map((node, idx) => (
              <div
                className="trackNode"
                onClick={() => reviewNode(idx)}
              >
                <p>{idx}</p>
              </div>
            ))}
          </div>
          <h1>Create Story</h1>
          <div
            id="initiateNewNodeId"
            className={styles.actionButton}
          >
            <p>Create New Node</p>
          </div>
        </div>
        <ul>
          {Object
            .keys(entry)
            .map(
              (keyName, keyIndex) => {
                <TrackNode type='text' />
              })}
        </ul>
        {
          addingNode ?
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
      <div
        id="newNodeFormWrapperId"
        className={styles.newNodeFormWrapper}
      >
        <div className={styles.newNodeFormContainer}>
          <form>

          </form>
        </div>
      </div>
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