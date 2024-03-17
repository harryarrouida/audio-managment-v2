import React from 'react'

export default function CauserieFields(props) {
  return (
    <div>
      <input type='text' name="speaker" onCanPlay={props.handleChange} placeholder='speaker'></input>
      <input type='text' name="causerie_reciter" onCanPlay={props.handleChange} placeholder='causerie_reciter'></input>
      <input type='text' name="causerie_reciter" onCanPlay={props.handleChange} placeholder='causerie_reciter'></input>
    </div>
  )
}
