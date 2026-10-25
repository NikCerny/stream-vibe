import Badge from "../Badge";
import RatingStars from "../RatingStars";
import "./ReviewCard.scss";

const ReviewCard = (props) => {
  const { name, fromCountry, rating, reviewText } = props;
  return (
    <div className="review-card">
      <header className="review-card__header">
        <div className="review-card__author">
          <h4 className="review-card__name h6">{name}</h4>
          <p className="review-card__extra-info">From {fromCountry}</p>
        </div>
        <Badge>
          <RatingStars
            starCount={rating}
            ratingCount={rating}
            isLarge
          ></RatingStars>
        </Badge>
      </header>
      <blockquote className="review-card__body">
        <p>{reviewText}</p>
      </blockquote>
    </div>
  );
};

export default ReviewCard;
