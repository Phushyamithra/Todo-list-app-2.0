// RadioButton.js
import React from 'react';

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <div>
      <input 
        type="radio" 
        value={value} 
        checked={checked} 
        onChange={onChange} 
      />
      {label}
    </div>
  );
}

export default RadioButton;
