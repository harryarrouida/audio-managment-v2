import React from 'react';
import Input from '../customizedComponents/Input';

export default function NewsFields(props) {
  return (
    <div className='w-3/5 mx-auto'>
      <Input
        for="commentator"
        id="commentator"
        type='text'
        name='commentator'
        placeholder='Commentator'
        text='Commentator'
        handleChange={props.handleChange}
      />
      <Input
        for="event_location"
        id="event_location"
        type='text'
        name='event_location'
        placeholder='Event Location'
        text='Event Location'
        handleChange={props.handleChange}
      />
      <Input
        for="event_date"
        id="event_date"
        type='text'
        name='event_date'
        placeholder='Event Date'
        text='Event Date'
        handleChange={props.handleChange}
      />
      <Input
        for="sequence"
        id="sequence"
        type='text'
        name='sequence'
        placeholder='Sequence'
        text='Sequence'
        handleChange={props.handleChange}
      />
    </div>
  );
}
