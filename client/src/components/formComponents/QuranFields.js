import React from 'react';
import Input from '../customizedComponents/Input';

export default function QuranFields(props) {
  return (
    <div className='w-3/5 mx-auto flex flex-col text-center'>
      <Input
        for='quranReciter'
        id='quranReciter'
        type='text'
        name='quran_reciter'
        placeholder='Quran Reciter'
        text='Quran Reciter'
        handleChange={props.handleChange}
      />
      <Input
        for='reciteType'
        id='reciteType'
        type='text'
        name='recite_type'
        placeholder='Recite Type'
        text='Recite Type'
        handleChange={props.handleChange}
      />
    </div>
  );
}
