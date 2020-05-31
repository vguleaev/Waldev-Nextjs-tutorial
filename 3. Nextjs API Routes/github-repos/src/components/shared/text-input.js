import React from 'react';

const TextInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
