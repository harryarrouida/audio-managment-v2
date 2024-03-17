import React from 'react'

export default function MusicFields(props) {
  return (
    <div>
      <input type='text' name='singer' placeholder='singer' onChange={props.handleChange}></input>
      <input type='text' name='writer' placeholder='writer' onChange={props.handleChange}></input>
      <input type='text' name='composer' placeholder='composer' onChange={props.handleChange}></input>
      <input type='text' name='interpreter' placeholder='interpreter' onChange={props.handleChange}></input>
    </div>
  )
}
