import "./CategoryCard.scss";
import { Image } from "minista/assets";
import Icon from "@/components/Icon";
import classNames from "classnames";
import RatingStars from "@/components/RatingStars";
import Badge from "@/components/Badge";

const CategoryCard = (props) => {
  const {
    title,
    images = [],
    isTrending = false,
    isTrendingShow = false,
    isNewRelease = false,
    isNewReleaseShow = false,
    isMustWatch = false,
    views,
    duration,
    releaseDate,
    rating,
    seasonCount,
    badgeContent,
  } = props;

  
  const isTrendingClass = isTrending ? "is-trending" : "";
  const isTrendingShowClass = isTrendingShow ? "is-trending-show" : "";
  const isNewReleaseClass = isNewRelease ? "is-new-release" : "";
  const isNewReleaseShowClass = isNewReleaseShow ? "is-new-release-show" : "";
  const isMustWatchClass = isMustWatch ? "is-must-watch" : "";
  const viewsFormatted = `${Number(views) / 1000}K`;
  const durationInMinutes = Number(duration);
  const durationFormatted = Number.isFinite(durationInMinutes)
    ? `${Math.floor(durationInMinutes / 60)}h ${durationInMinutes % 60}min`
    : "";
  const parsedReleaseDate = releaseDate
    ? new Date(`${releaseDate}T00:00:00Z`)
    : null;
  const releaseDateFormatted =
    parsedReleaseDate && !Number.isNaN(parsedReleaseDate.getTime())
      ? new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        }).format(parsedReleaseDate)
      : "";

  const defaultBlock = (
    <>
      <h3 className="category-card__title">
        {badgeContent && (
          <Badge className="category-card__badge" mode="accent" isLarger>
            {badgeContent}
          </Badge>
        )}
        <span className="category-card__title--larger">{title}</span>
      </h3>

      <Icon className="category-card__icon" name="arrow-right" />
    </>
  );

  const trendingBlock = (
    <div className="category-card__extra-info">
      <div className="category-card__duration">{durationFormatted}</div>
      <div className="category-card__views">{viewsFormatted}</div>
    </div>
  );



  const newReleaseBlock = (
    <div className="category-card__new-release">
      Released at&nbsp;
      <span className="category-card__new-release--accent">
        {releaseDateFormatted}
      </span>
    </div>
  );

  const newReleaseShowBlock = (
    <div className="category-card__extra-info">
      <div className="category-card__duration">{durationFormatted}</div>
      <div className="category-card__season">{seasonCount} Season</div>
    </div>
  );

  const mustWatchBlock = (
    <div className="category-card__extra-info">
      <div className="category-card__duration">{durationFormatted}</div>
      <div className="category-card__rating">
        <RatingStars
          starCount={rating}
          extraText={viewsFormatted}
        ></RatingStars>
      </div>
    </div>
  );

  return (
    <a
      className={classNames(
        "category-card",
        isTrendingClass,
        isTrendingShowClass,
        isNewReleaseClass,
        isMustWatchClass,
        isNewReleaseShowClass,
      )}
      href="/movies"
    >
      <div className="category-card__images">
        {images.map((imgSrc) => (
          <div className="category-card__image-wrapper" key={imgSrc}>
            <Image
              className="category-card__image"
              src={imgSrc}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="category-card__body">
        {title && defaultBlock}
        {isTrending && trendingBlock}
        {isNewRelease && newReleaseBlock}
        {isMustWatch && mustWatchBlock}
        {isNewReleaseShow && newReleaseShowBlock}
      </div>
    </a>
  );
};

export default CategoryCard;
