import { useState } from "react";
import "./RatingComponentStyles.css";
import SubmitRatingComponent from "../SubmitRatingComponent/SubmitRatingComponent";
import ThankYouComponent from "../ThankYouComponent/ThankYouComponent";

function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState();
  const [rating, setRating] = useState();

  const ratingHandler = (event) => {
    setSelectedRating(event.target.value);
  };
  console.log("selected", selectedRating);
  const submitHandler = () => {
    setRating(selectedRating);
  };

  return (
    <div className="container-main">
      {rating ? (
        <ThankYouComponent rating={rating} />
      ) : (
        <SubmitRatingComponent
          ratingHandler={ratingHandler}
          submitHandler={submitHandler}
          selectedRating={selectedRating}
        />
      )}
    </div>
  );
}

export default RatingComponent;
