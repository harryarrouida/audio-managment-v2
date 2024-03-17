import React from 'react'

export default function QuranFields(props) {
  return (
    <div>
      <input type='text' name='quran_reciter' placeholder='quran_reciter' onChange={props.handleChange}></input>
      <input type='text' name='recite_type' placeholder='recite_type' onChange={props.handleChange}></input>
    </div>
  )
}
