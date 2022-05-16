import { combineReducers } from 'redux'
import usersReducers from './users/usersReducers'

const rootReducer = combineReducers({
  users: usersReducers,
})

export default rootReducer
