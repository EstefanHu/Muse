import React from 'react'
import Link from 'next/link'

export default function Register() {
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
      <h1>Begin Your Story</h1>
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
      <span style={styles.endLinks}>
        <p>Click "Register" above to accept Muse's</p>
        <p>
          <Link style={styles.link} href='/terms'><a>Terms of Service</a></Link> &&nbsp
          <Link style={styles.link} href='/privacy'><a>Privacy Policy.</a></Link>
        </p>
      </span>
    </form>
  )
}