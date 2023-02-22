import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../layout'
import "./style.css"
const LoginPage = () => {
  return (
    <Layout>
      <div className="container">

      <form className='form'>
        <h1>Login</h1>
        <div className='input-box'>
          <label htmlFor="password">password</label>
          <input value="password" name="password" type="password" />
        </div>
        <div className='input-box'>
          <label htmlFor="email">email</label>
          <input value="email" name="email" type="email" />
        </div>
        <div>
          <button>Login</button>
        </div>

        <div className='link-form-box'>
          <Link to="/register">You don't have an account?</Link>
        </div>
      </form>
      </div>
    </Layout>
  )
}

export default LoginPage