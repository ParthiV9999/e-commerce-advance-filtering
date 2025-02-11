import { FaStar, FaRegStar } from "react-icons/fa";

function StarRating({ rating }) {
  return (
    <span>
      {[...Array(5)].map((_, index) =>
        index + 1 <= rating ? <FaStar key={index} /> : <FaRegStar key={index} />
      )}
    </span>
  );
}

export default StarRating;
