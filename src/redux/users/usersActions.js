import {
  RETRIEVE_USERS,
  CREATE_USER,
  RETRIEVE_USER,
  DELETE_USER,
} from './usersConstants'
import axios from 'axios'
export const retrieveUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
      type: RETRIEVE_USERS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const createUser = (newU) => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newU),
    })

    const result = await response.json()

    dispatch({
      type: CREATE_USER,
      payload: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const findUserById = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    const result = await response.json()

    console.log(result)
    dispatch({
      type: RETRIEVE_USER,
      payload: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })

    dispatch({
      type: DELETE_USER,
      payload: id,
    })
  } catch (err) {
    console.log(err)
  }
}
