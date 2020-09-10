import React from 'react'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const launchLogin = e => {
    e.preventDefault();
  }

  return (
    <form onSubmit={launchLogin}>
      <h1>Sign In</h1>
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
      <span style={styles.endLinks}>
        <p>
          <Link style={styles.link} href='/forgot'><a>Forgot Password?</a></Link> -&nbsp;
          <span style={styles.link} onClick={() => setHasAccount(false)}>Sign up for :Muse</span>
        </p>
      </span>
    </form>
  )
}