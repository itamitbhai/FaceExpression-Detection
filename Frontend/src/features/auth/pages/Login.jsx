import React, { useState } from 'react'
import "../../auth/style/login.scss"
import "../components/FormGroup"
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const {loading, handleLogin} = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
      e.preventDefault()
      await handleLogin({email, password})
      navigate("/")
  }



  return (
    <main className='login-page'>
      <div className='form-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <FormGroup
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              label="Email"
              placeholder="Enter your email"/>
            <FormGroup
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              label="password"
              placeholder="Enter your Password"/>
            <button className='button' type='submit'>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register Here</Link></p>

      </div>
    </main>
  )
}

export default Login
