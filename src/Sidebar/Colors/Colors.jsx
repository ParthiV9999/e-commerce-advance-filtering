import Input from "../../components/Input";

function Colors({ handleRadioInput }) {
  return (
    <div className="colors">
      <h4 className="sidebar-title">Colors</h4>
      <div>
        <Input
          handleRadioInput={handleRadioInput}
          value=""
          title="All"
          name="colors"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="black"
          title="Black"
          name="colors"
          color="black"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="blue"
          title="Blue"
          name="colors"
          color="blue"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="red"
          title="Red"
          name="colors"
          color="red"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="green"
          title="Green"
          name="colors"
          color="green"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="white"
          title="White"
          name="colors"
          color="white"
        />
      </div>
    </div>
  );
}

export default Colors;
