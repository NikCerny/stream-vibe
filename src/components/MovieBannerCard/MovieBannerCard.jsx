import "./MovieBannerCard.scss";
import Button from "@/components/Button";

const MovieBannerCard = (props) => {
  const { title, description, bannerSrc } = props;
  return (
    <div
      className="movie-banner-card__slide"
      style={{ "--movieBannerImage": `url("${bannerSrc}")` }}
    >
      <div className="movie-banner-card__content">
        <h2 className="movie-banner-card__title h3">{title}</h2>
        <div className="movie-banner-card__description hidden-mobile">
          <p>{description}</p>
        </div>
        <div className="movie-banner-card__actions">
          <Button
            className="movie-banner-card__button"
            iconName="play"
            hasFillIcon
            label="Play Now"
          ></Button>
          <div className="movie-banner-card__buttons-extra">
            <Button
              iconName="plus"
              label="Add to my watchlist"
              isLabelHidden
              mode="black-06"
            ></Button>
            <Button
              iconName="like"
              label="Give a like"
              isLabelHidden
              mode="black-06"
            ></Button>
            <Button
              iconName="volume"
              label="Mute volume"
              isLabelHidden
              mode="black-06"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBannerCard;
