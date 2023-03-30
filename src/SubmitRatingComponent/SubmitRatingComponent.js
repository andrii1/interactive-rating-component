import "./SubmitRatingComponentStyles.css";

function SubmitRatingComponent({
  ratingHandler,
  submitHandler,
  selectedRating,
}) {
  console.log("selected1", selectedRating);
  return (
    <>
      <button className="icon-star">
        <img src="../../icon-star.svg" alt="icon star" />
      </button>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="container-ratings">
        <button
          value="1"
          className={`button-rating ${
            selectedRating === "1" ? "selected" : ""
          }`}
          onClick={ratingHandler}
        >
          1
        </button>
        <button
          value="2"
          className={`button-rating ${
            selectedRating === "2" ? "selected" : ""
          }`}
          onClick={ratingHandler}
        >
          2
        </button>
        <button
          value="3"
          className={`button-rating ${
            selectedRating === "3" ? "selected" : ""
          }`}
          onClick={ratingHandler}
        >
          3
        </button>
        <button
          value="4"
          className={`button-rating ${
            selectedRating === "4" ? "selected" : ""
          }`}
          onClick={ratingHandler}
        >
          4
        </button>
        <button
          value="5"
          className={`button-rating ${
            selectedRating === "5" ? "selected" : ""
          }`}
          onClick={ratingHandler}
        >
          5
        </button>
      </div>
      <button className="button-submit" onClick={submitHandler}>
        Submit
      </button>
    </>
  );
}

export default SubmitRatingComponent;
