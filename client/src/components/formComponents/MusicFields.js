import React from 'react';
import Input from '../customizedComponents/Input';

export default function MusicFields(props) {
  return (
    <div className='w-3/5 mx-auto text-center'>
      <Input
        for="singer"
        id="singer"
        type='text'
        name='singer'
        placeholder='Singer'
        text='Singer'
        handleChange={props.handleChange}
      />
      <Input
        for="interpreter"
        id="interpreter"
        type='text'
        name='interpreter'
        placeholder='Interpreter'
        text='Interpreter'
        handleChange={props.handleChange}
      />
      <Input
        for="composer"
        id="composer"
        type='text'
        name='composer'
        placeholder='Composer'
        text='Composer'
        handleChange={props.handleChange}
      />
      <Input
        for="music_writer"
        id="music_writer"
        type='text'
        name='music_writer'
        placeholder='Music Writer'
        text='Music Writer'
        handleChange={props.handleChange}
      />
      <Input
        for="musical_genre"
        id="musical_genre"
        type='text'
        name='musical_genre'
        placeholder='Musical Genre'
        text='Musical Genre'
        handleChange={props.handleChange}
      />
      <Input
        for="lyrics"
        id="lyrics"
        type='text'
        name='lyrics'
        placeholder='Lyrics'
        text='Lyrics'
        handleChange={props.handleChange}
      />
      <Input
        for="orchestra"
        id="orchestra"
        type='text'
        name='orchestra'
        placeholder='Orchestra'
        text='Orchestra'
        handleChange={props.handleChange}
      />
      <Input
        for="distribution"
        id="distribution"
        type='text'
        name='distribution'
        placeholder='Distribution'
        text='Distribution'
        handleChange={props.handleChange}
      />
    </div>
  );
}
