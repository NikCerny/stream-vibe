import RatingStars from "../RatingStars";
import "./Ratings.scss";

const Ratings = (props) => {
  const { items = [] } = props;

  return (
    <div className="ratings">
      <ul className="ratings__list">
        {items.map(({ title, ratingValue }, index) => (
          <li className="ratings__item" key={index}>
            <h4 className="ratings__title">{title}</h4>
            <RatingStars starCount={ratingValue} ratingCount={ratingValue} className="ratings__label"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ratings;
