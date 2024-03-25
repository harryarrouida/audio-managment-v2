import React from 'react'
import FetchUsersComponent from '../../components/fetchComponents/FetchUsersComponent'
import { SideMenu } from '../../components/customizedComponents/SideMenu'

export default function FetchUsers() {
  return (
    <div className="flex flex-between h-screen">
      <SideMenu />
      <div className="w-3/5 ml-96">
        <div className="title">Fetch Users</div>
        <FetchUsersComponent />
      </div>
    </div>
  )
}
