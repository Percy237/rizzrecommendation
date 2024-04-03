import ReactStars from "react-rating-stars-component";
import api from "../api";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast("You have already rated this.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  // const updateRating = (newRating) => {
  //   api
  //     .patch(`/api/pickup-lines/${pickupLine.id}/rate/`, {
  //       rating: newRating,
  //     })
  //     .then((res) => {
  //       console.log("Rating updated successfully!");
  //       console.log(res);
  //     })
  //     .catch((err) => alert(err));
  // };

  const ratingChanged = (newRating) => {
    ratePickUpLine(newRating);
  };
  return (
    <div>
      <ToastContainer />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        isHalf={true}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

Rating.propTypes = {
  pickupLine: PropTypes.shape({
    id: PropTypes.number.isRequired, // Adjust the type according to your data
  }).isRequired,
};

export default Rating;
