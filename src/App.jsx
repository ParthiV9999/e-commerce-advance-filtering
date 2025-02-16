import { useEffect, useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";

function App() {
  const allProducts = [...products];
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // search-bar filter
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // radio input filter
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Recommended Button filter
  const handleButtonClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    setFilteredProducts([...allProducts]);

    const searchFilter = allProducts.filter(
      ({ title }) => title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    const clickFilter = allProducts.filter(
      ({ title, newPrice, company, color, category }) =>
        company === selectedCategory ||
        category === selectedCategory ||
        newPrice === selectedCategory ||
        color === selectedCategory ||
        title === selectedCategory
    );

    query === "" && setFilteredProducts([...allProducts]);

    if (query) {
      query && setFilteredProducts([...searchFilter]);
    } else if (selectedCategory) {
      selectedCategory && setFilteredProducts([...clickFilter]);
    }
  }, [query, selectedCategory]);

  const result =
    filteredProducts.length > 0 ? (
      filteredProducts.map(
        ({ img, title, rating, reviews, prevPrice, newPrice }, index) => (
          <Card
            key={index}
            img={img}
            title={title}
            rating={rating}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      )
    ) : (
      <div className="not-found text-bg-clip">No Products Found!</div>
    );

  return (
    <div className="main grid-layout">
      <Sidebar handleRadioInput={handleRadioChange} />
      <Nav handleSearchInput={handleSearchChange} query={query} />
      <Recommended onButtonClick={handleButtonClick} />
      <Products result={result} items={filteredProducts.length} />
    </div>
  );
}

export default App;
