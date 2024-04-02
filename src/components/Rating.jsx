import ReactStars from "react-rating-stars-component";
import api from "../api";
import PropTypes from "prop-types";

const Rating = ({ pickupLineId }) => {
  console.log(pickupLineId.id);
  const ratePickUpLine = (newRating) => {
    api
      .patch(`/api/pickup-lines/${pickupLineId.id}/rate/`, {
        rating: newRating,
      })
      .then((res) => {
        console.log("Rating submitted successfully!");
        console.log(res);
      })
      .catch((err) => alert(err));
  };

  const ratingChanged = (newRating) => {
    ratePickUpLine(newRating);
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      isHalf={true}
      size={24}
      activeColor="#ffd700"
    />
  );
};

Rating.propTypes = {
  pickupLineId: PropTypes.shape({
    id: PropTypes.number.isRequired, // Adjust the type according to your data
  }).isRequired,
};

export default Rating;
