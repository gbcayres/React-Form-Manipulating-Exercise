import React from 'react'

function Input({ type, label, name, placeholder, value, handleChange }) {
  return (
    <div className="input_container">
        <label htmlFor={name}>{label}</label>
        <input onChange={handleChange} value={value} name={name} type={type} placeholder={placeholder} required/>
    </div>
  )
}

export default Input