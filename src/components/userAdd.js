import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../redux/users/usersActions'
import { useDispatch } from 'react-redux'

const UserAdd = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    const newU = {
      name,
      username,
      email,
    }
    dispatch(createUser(newU))
    navigate('/')
  }

  return (
    <div className='container'>
      <div className='mb-3'>
        <button type='button' class='btn btn-link' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <form onSubmit={handleForm}>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>UserName</label>
          <input
            type='text'
            className='form-control'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UserAdd
