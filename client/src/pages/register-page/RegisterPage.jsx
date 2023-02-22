import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../layout'

import "./style.css"
const RegisterPage = () => {
  // Add new user 
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  })
  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  const onSubmitRegisterNewUser = async (e) => {
    e.preventDefault()
    try {
      await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Layout>
      <div className="container">
        <form onSubmit={onSubmitRegisterNewUser} className='form'>
          <h1>Register</h1>
          <div className='input-box'>
            <label htmlFor="user">Name</label>
            <input onChange={e => onChange(e)} name="username" type="user" />
          </div>
          <div className='input-box'>
            <label htmlFor="password">password</label>
            <input onChange={e => onChange(e)} name="password" type="password" />
          </div>
          <div className='input-box'>
            <label htmlFor="email">email</label>
            <input onChange={e => onChange(e)} name="email" type="email" />
          </div>
          <div>
            <button>Register</button>
          </div>

          <div className='link-form-box'>
            <Link to="/login">You already have an account?</Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default RegisterPage