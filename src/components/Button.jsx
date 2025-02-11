function Button({ onButtonClick, value, title }) {
  return (
    <button onClick={onButtonClick} className="btn" value={value}>
      {title}
    </button>
  );
}

export default Button;
