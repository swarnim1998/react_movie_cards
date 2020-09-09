import React from 'react';

function Input(props) {
  return (
    <div>
      <input
        type='text'
        placeholder='Enter Movie Name'
        onChange={(event) => props.onChange(event)}
      />
    </div>
  );
}

export default Input;
