import Card from "../components/Card";
import "./Products.css";

function Products({ result, items }) {
  return (
    <section className="products p-1 bgclr">
      {items > 0 && (
        <div className="total-products text-bg-clip">
          {items} {items <= 1 ? "Product" : "Products"}
        </div>
      )}

      <div className="container-max card-container">{result}</div>
    </section>
  );
}

export default Products;
