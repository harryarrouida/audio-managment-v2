import React from 'react';
import Input from '../customizedComponents/Input';

export default function FictionFields(props) {
  return (
    <div className='w-3/5 mx-auto'>
      <Input
        for="author"
        id="author"
        type='text'
        name='author'
        placeholder='Author'
        text='Author'
        handleChange={props.handleChange}
      />
      <Input
        for="actor"
        id="actor"
        type='text'
        name='actor'
        placeholder='Actor'
        text='Actor'
        handleChange={props.handleChange}
      />
      <Input
        for="fiction_writer"
        id="fiction_writer"
        type='text'
        name='fiction_writer'
        placeholder='Fiction Writer'
        text='Fiction Writer'
        handleChange={props.handleChange}
      />
      <Input
        for="adaptation"
        id="adaptation"
        type='text'
        name='adaptation'
        placeholder='Adaptation'
        text='Adaptation'
        handleChange={props.handleChange}
      />
    </div>
  );
}
