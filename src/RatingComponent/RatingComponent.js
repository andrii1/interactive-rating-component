import './RatingComponentStyles.css';

function RatingComponent() {
  return (
    <div className="container">
      <img src="../../icon-star.svg" alt="icon star" />
  {/* Rating state start*/}
<h1>How did we do?</h1>
  <p>

  Please let us know how we did with your support request. All feedback is appreciated
  to help us improve our offering!</p>

  <button className='button-rating'>1</button>
  <button className='button-rating'>2</button>
  <button className='button-rating'>3</button>
  <button className='button-rating'>4</button>
  <button className='button-rating'>5</button>

  <button>Submit</button>

  {/* Rating state end*/}

    {/* Thank you state start*/}



    {/* Thank you state end*/}

    </div>
  );
}

export default RatingComponent;
