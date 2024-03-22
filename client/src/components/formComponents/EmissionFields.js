import React from 'react';
import Input from '../customizedComponents/Input';

export default function EmissionFields(props) {
  return (
    <div className='w-3/5 mx-auto text-center'>
      <Input
        for="presenter"
        id="presenter"
        type='text'
        name="presenter"
        placeholder='Presenter'
        text='Presenter'
        handleChange={props.handleChange}
      />
      <Input
        for="preparation"
        id="preparation"
        type='text'
        name="preparation"
        placeholder='Preparation'
        text='Preparation'
        handleChange={props.handleChange}
      />
      <Input
        for="format"
        id="format"
        type='text'
        name="format"
        placeholder='Format'
        text='Format'
        handleChange={props.handleChange}
      />
      <Input
        for="version"
        id="version"
        type='text'
        name="version"
        placeholder='Version'
        text='Version'
        handleChange={props.handleChange}
      />
    </div>
  );
}
