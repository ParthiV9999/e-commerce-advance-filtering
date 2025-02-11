import Button from "../components/Button";
import "./Recommended.css";

function Recommended({ onButtonClick }) {
  return (
    <div className="recommended flex-cc p-1">
      <div className="container-max">
        <h3>Recommended</h3>
        <div className="btn-container">
          <Button onButtonClick={onButtonClick} value="" title="All Products" />
          <Button onButtonClick={onButtonClick} value="Nike" title="Nike" />
          <Button onButtonClick={onButtonClick} value="Adidas" title="Adidas" />
          <Button onButtonClick={onButtonClick} value="Puma" title="Puma" />
          <Button onButtonClick={onButtonClick} value="Vans" title="Vans" />
        </div>
      </div>
    </div>
  );
}

export default Recommended;
