import ReactStars from "react-rating-stars-component";
import api from "../api";
import PropTypes from "prop-types";

const Rating = ({ pickupLine }) => {
 
  const ratePickUpLine = (newRating) => {
    api
      .post(`/api/ratings/`, {
        pickup_line: pickupLine.id,
        rating: newRating,
      })
      .then((res) => {
        console.log("Rating submitted successfully!");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ratingChanged = (newRating) => {
    ratePickUpLine(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        value={pickupLine.ratings[0]}
        isHalf={true}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

Rating.propTypes = {
  pickupLine: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default Rating;
