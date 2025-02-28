import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
  const {user, isSignedIn} = useUser()
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
      <img src='./logo.png' width={300} height={300} />
      {
        isSignedIn ? 
        <div>
          <Button>Dashboard</Button>
          <UserButton />
        </div>:
      <Link to={'/auth/sign-in'}>
      <Button>Get Started</Button>
      </Link>

      }
    </div>
  )
}

export default Header
