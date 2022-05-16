import React, { useEffect } from 'react'
import UserItem from './userItem'
import { useSelector, useDispatch } from 'react-redux'
import { retrieveUsers } from '../redux/users/usersActions'

const UsersList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)
  useEffect(() => {
    dispatch(retrieveUsers())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>UserName</th>
            <th scope='col'>Email</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
