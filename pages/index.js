import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import firebase from 'firebase'

import styles from '../styles/index.module.sass'

export default function Home() {
  const [isNew, setIsNew] = React.useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.splashMain}>
        <nav>
          <h1><span>Project</span>:Muse</h1>
          <ul>
            <li>Our Story</li>
            <li><span>Why</span> Seattle</li>
            <li>Follow <span>Project</span></li>
          </ul>
        </nav>

        <section className={styles.hero}>
          <header>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
            <h2>Project:Muse</h2>
          </header>
          <h1>:Muse</h1>
          <footer className={styles.heroFooter}>

          </footer>
        </section>

        <section className={styles.whatIsIt}>

        </section>

        <section className={styles.old}>
          <h2>An experimental story telling experience</h2>
          <div className={styles.authWrapper}>
            {isNew ? <Register setIsNew={setIsNew} /> : <Login setIsNew={setIsNew} />}
          </div>
        </section>
      </main>
    </div>
  )
}

const Login = ({ setIsNew }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const launchLogin = e => {
    e.preventDefault();
  }

  return (
    <form onSubmit={launchLogin}>
      <h3>Sign In</h3>
      <label>EMAIL ADDRESS (REQUIRED)</label>
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required />
      <label>PASSWORD (REQUIRED)</label>
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required />
      <input
        type='submit'
        value='Log in' />
      <span>
        <p>
          <Link href='/forgot'><a>Forgot Password?</a></Link> -&nbsp;
          <span onClick={() => setIsNew(true)}>Sign up for :Muse</span>
        </p>
      </span>
    </form>
  )
}

const Register = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const launchRegister = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={launchRegister}>
      <h3>Begin Your Story</h3>
      <label>FIRST NAME (REQUIRED)</label>
      <input
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder='First Name'
        required
      />
      <label>LAST NAME (REQUIRED)</label>
      <input
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder='Last Name'
        required
      />
      <label>EMAIL ADDRESS (REQUIRED)</label>
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />
      <label>PASSWORD (REQUIRED)</label>
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <label>CONFIRM PASSWORD(REQUIRED)</label>
      <input
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder='Confirm Password'
        required
      />
      <input
        type='submit'
        value='Register'
      />
      <span>
        <p>Click "Register" above to accept Muse's</p>
        <p>
          <Link href='/terms'><a>Terms of Service</a></Link>
          &nbsp;&&nbsp;
          <Link href='/privacy'><a>Privacy Policy.</a></Link>
        </p>
      </span>
    </form>
  )
}