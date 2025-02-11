function Input({ handleRadioInput, value, title, name, color }) {
  return (
    <div className="sidebar-input-container">
      <input
        onChange={handleRadioInput}
        type="radio"
        value={value}
        name={name}
        style={{ accentColor: color }}
      />
      <label>{title}</label>
    </div>
  );
}

export default Input;
