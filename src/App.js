import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/header'
import UsersList from './components/usersList'
import UserAdd from './components/userAdd'
import UserDetails from './components/userDetails'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<UsersList />} />
          <Route exact path='/add' element={<UserAdd />} />
          <Route path='/users/:id' element={<UserDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
