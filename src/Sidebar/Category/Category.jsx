import Input from "../../components/Input";

function Category({ handleRadioInput }) {
  return (
    <div className="category">
      <h4 className="sidebar-title">Category</h4>
      <div>
        <Input
          handleRadioInput={handleRadioInput}
          value=""
          title="All"
          name="category"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="sneakers"
          title="Sneakers"
          name="category"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="flats"
          title="Flats"
          name="category"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="sandals"
          title="Sandals"
          name="category"
        />
        <Input
          handleRadioInput={handleRadioInput}
          value="heels"
          title="Heels"
          name="category"
        />
      </div>
    </div>
  );
}

export default Category;
