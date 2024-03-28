function Select({ label, name, options, value, handleChange }) {
  return (
    <div className="input_container">
        <label htmlFor={name}>{label}</label>
        <select name={name} value={value} onChange={handleChange}>
            <option>Selecione uma categoria</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Select