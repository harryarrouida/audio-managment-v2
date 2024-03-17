import React from 'react';
import Input from '../customizedComponents/Input';

export default function CauserieFields(props) {
  return (
    <div className='w-3/5 mx-auto'>
      <Input
        for="speaker"
        id="speaker"
        type='text'
        name="speaker"
        placeholder='Speaker'
        text='Speaker'
        handleChange={props.handleChange}
      />
      <Input
        for="causerie_reciter"
        id="causerie_reciter"
        type='text'
        name="causerie_reciter"
        placeholder='Causerie Reciter'
        text='Causerie Reciter'
        handleChange={props.handleChange}
      />
      <Input
        for="causerie_location"
        id="causerie_location"
        type='text'
        name="causerie_location"
        placeholder='Causerie Location'
        text='Causerie Location'
        handleChange={props.handleChange}
      />
    </div>
  );
}
