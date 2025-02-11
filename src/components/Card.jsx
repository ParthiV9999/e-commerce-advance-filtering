import { BsFillBagHeartFill } from "react-icons/bs";
import StarRating from "./StarRating";

function Card({ img, title, rating, reviews, prevPrice, newPrice }) {
  return (
    <div className="card">
      <figure className="card-img">
        <img src={img} alt="" />
      </figure>
      <div className="card-content">
        <div className="card-title text-bg-clip">
          <h3>{title}</h3>
        </div>
        <div>
          <span className="card-rating">
            <StarRating rating={rating} />
          </span>
          <span> {reviews}</span>
        </div>
        <div className="card-price flex-csb">
          <span>
            <del>{prevPrice}</del>
            <span> {newPrice}</span>
          </span>
          <span className="bag-icon">
            <BsFillBagHeartFill />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
