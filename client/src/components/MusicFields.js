import React from 'react'

export default function MusicFields(props) {
  return (
    <div>
      <input type='text' name='singer' placeholder='singer' onChange={props.handleChange}></input>
      <input type='text' name='interpreter' placeholder='interpreter' onChange={props.handleChange}></input>
      <input type='text' name='composer' placeholder='composer' onChange={props.handleChange}></input>
      <input type='text' name='music_writer' placeholder='music_writer' onChange={props.handleChange}></input>
      <input type='text' name='musical_genre' placeholder='musical_genre' onChange={props.handleChange}></input>
      <input type='text' name='lyrics' placeholder='lyrics' onChange={props.handleChange}></input>
      <input type='text' name='orchestra' placeholder='orchestra' onChange={props.handleChange}></input>
      <input type='text' name='distribution' placeholder='distribution' onChange={props.handleChange}></input>
    </div>
  )
}
