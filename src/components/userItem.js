import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/users/usersActions'

const UserItem = ({ user }) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link to={`/users/${user.id}`}>
            <button type='button' className='btn btn-link'>
              View
            </button>
          </Link>
          <Link to={`/add/${user.id}`}>
            <button type='button' className='btn btn-link'>
              Edit
            </button>
          </Link>

          <button
            type='button'
            className='btn btn-link'
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}

export default UserItem
