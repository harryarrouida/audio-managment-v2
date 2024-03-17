import React from 'react'

export default function PodcastFields(props) {
  return (
    <div>
      <input type='text' name="host" onCanPlay={props.handleChange} placeholder='host'></input>
      <input type='text' name="" onCanPlay={props.handleChange} placeholder='blabla'></input>
    </div>
  )
}
