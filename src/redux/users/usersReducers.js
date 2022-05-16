import {
  CREATE_USER,
  RETRIEVE_USERS,
  RETRIEVE_USER,
  DELETE_USER,
} from '../users/usersConstants'

const initialState = {
  users: [],
  user: [],
}

function usersReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        users: [payload, ...state.users],
      }

    case RETRIEVE_USERS:
      return {
        ...state,
        users: payload,
      }

    case RETRIEVE_USER:
      return {
        ...state,
        user: [payload],
      }



    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      }



    default:
      return state
  }
}

export default usersReducer
