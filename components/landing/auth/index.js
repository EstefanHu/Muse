import React from 'react'
import styles from './auth.module.sass'

import Register from './register'
import Login from './login'

export default function Auth() {
  const [isNew, setIsNew] = React.useState(false);

  return <section>
    <div>
      {
        isNew ?
          <Register setIsNew={setIsNew} />
          : <Login setIsNew={setIsNew} />
      }
    </div>
  </section>
}