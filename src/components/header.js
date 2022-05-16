import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-dark text-white'>
      <div className='container'>
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4 '>
          <Link
            to='/'
            className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
          >
            <span className='fs-4 text-white'>Users</span>
          </Link>

          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <Link to='/add' className='nav-link text-white'>
                Add User
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  )
}

export default Header
