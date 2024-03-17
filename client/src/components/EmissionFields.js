import React from 'react'

export default function EmissionFields(props) {
  return (
    <div>
      <input type='text' name="presenter" onCanPlay={props.handleChange} placeholder='presenter'></input>
      <input type='text' name="preparation" onCanPlay={props.handleChange} placeholder='preparation'></input>
      <input type='text' name="format" onCanPlay={props.handleChange} placeholder='format'></input>
      <input type='text' name="version" onCanPlay={props.handleChange} placeholder='version'></input>
    </div>
  )
}
