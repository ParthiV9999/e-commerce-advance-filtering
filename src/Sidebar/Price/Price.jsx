import Input from "../../components/Input";

function Price({ handleRadioInput }) {
  return (
    <div className="price">
      <h4 className="sidebar-title">Price</h4>
      <div>
        <Input
          handleRadioInput={handleRadioInput}
          value=""
          title="All"
          name="price"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value={50}
          title="$0 - $50"
          name="price"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value={100}
          title="$50 - $100"
          name="price"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value={150}
          title="$100 - $150"
          name="price"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value={200}
          title="Over $150 "
          name="price"
        />
      </div>
    </div>
  );
}

export default Price;
