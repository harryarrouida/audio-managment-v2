import React from 'react'

export default function FictionFields(props) {
  return (
    <div>
      <input type='text' name='author' placeholder='author' onChange={props.handleChange}></input>
      <input type='text' name='actor' placeholder='actor' onChange={props.handleChange}></input>
      <input type='text' name='fiction_writer' placeholder='fiction_writer' onChange={props.handleChange}></input>
      <input type='text' name='adaptation' placeholder='adaptation' onChange={props.handleChange}></input>
    </div>
  )
}
