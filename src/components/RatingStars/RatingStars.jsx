import "./RatingStars.scss";

function starBlock(starCount = 0) {
  const starBlocks = [];
  const fullStars = Math.floor(starCount);
  const hasHalfStar = starCount - fullStars >= 0.5;

  for (let i = 0; i < 5; i++) {
    let stateClass = "";

    if (i < fullStars) {
      stateClass = "is-active";
    } else if (i === fullStars && hasHalfStar) {
      stateClass = "is-half-active";
    }

    starBlocks.push(
      <div className={`rating-stars__star ${stateClass}`} key={i} />,
    );
  }

  return starBlocks;
}

const RatingStars = (props) => {
  const { starCount, ratingCount } = props;

  return (
    <div
      className="rating-stars"
      aria-label={`Rating ${starCount} out of 5`}
      title={`Rating ${starCount} out of 5`}
    >
      {starBlock(starCount)}
      <span className="rating-stars__rating-count">{ratingCount}</span>
    </div>
  );
};

export default RatingStars;
