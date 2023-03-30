import "./ThankYouComponentStyles.css";

function ThankYouComponent({rating}) {

  return (
    <div className="container-after">
      <img
        src="../../illustration-thank-you.svg"
        alt="icon star"
        className="img-thank-you"
      />
      <p className="result">You selected {rating} of 5!</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYouComponent;
