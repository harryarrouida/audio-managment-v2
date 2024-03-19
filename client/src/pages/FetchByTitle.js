import React from 'react'
import { SideMenu } from '../components/customizedComponents/SideMenu'
import FetchByTitleComponent from '../components/fetchComponents/FetchByTitleComponent'

export default function FetchByTitle() {
  return (
    <div className="flex flex-between h-screen">
      <SideMenu/>
      <div  className="w-3/5 ml-96">
        <FetchByTitleComponent/>
      </div>
    </div>
  )
}
