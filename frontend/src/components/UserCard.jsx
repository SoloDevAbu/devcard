import React from 'react'
import UserCardImage from './UserCardImage'
import Download from './Download'

const UserCard = () => {
  return (
    <div className='px-32 py-6 md:px-56 lg:px-72'>
        <UserCardImage/>
        <Download/>
    </div>
  )
}

export default UserCard