import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { findUserById } from '../redux/users/usersActions'

const UserDetails = () => {
  const { id } = useParams()
  useEffect(() => {
    dispatch(findUserById(id))
    console.log('i fire once')
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user)

  return (
    <div className='container'>
      <div className='mb-3'>
        <button type='button' class='btn btn-link' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>UserName</th>
            <th scope='col'>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserDetails
