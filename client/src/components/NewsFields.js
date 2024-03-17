import React from 'react'

export default function NewsFields(props) {
  return (
    <div>
      <input type='text' name='commentator' placeholder='commentator' onChange={props.handleChange}></input>
      <input type='text' name='event_location' placeholder='event_location' onChange={props.handleChange}></input>
      <input type='text' name='event_date' placeholder='event_date' onChange={props.handleChange}></input>
    </div>
  )
}
