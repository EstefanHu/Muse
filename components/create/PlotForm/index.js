import dynamic from 'next/dynamic'

import styles from './plot-form.module.sass'

const CSRMap = dynamic(() => import('./Map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default function PlotForm () {

  return (
    <div className='container'>
      <h1>Plot</h1>
    </div>
  )
}