import "./MovieShowCollectionCard.scss";
import withBase from "@/utils/withBase";
import { Image } from "minista/assets";
import RatingStars from "@/components/RatingStars";
import Badge from "@/components/Badge";

const MovieShowCollectionCard = (props) => {
  const {
    image,
    title,
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
  } = props;

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

  const durationBadge = (
    <Badge iconName="watches" className="collection-card__badge">
      {durationFormatted}
      <span className="visually-hidden">duration</span>
    </Badge>
  );

  const viewsBadge = (
    <Badge iconName="eye" className="collection-card__badge">
      {viewsFormatted}
      <span className="visually-hidden"> views</span>
    </Badge>
  );

  const newReleaseBadge = (
    <Badge className="collection-card__badge collection-card__badge--full-width">
      Released at&nbsp;
      <span className="collection-card__new-release--accent">
        {releaseDateFormatted}
      </span>
    </Badge>
  );

  const seasonBadge = (
    <Badge iconName="season" className="collection-card__badge">
      {seasonCount} Season
    </Badge>
  );

  const ratingBadge = (
    <Badge className="collection-card__badge">
      <RatingStars starCount={rating} ratingCount={viewsFormatted} />
    </Badge>
  );

  return (
    <a className="collection-card" href={withBase("movies")}>
      <Image className="collection-card__image" src={image} loading="lazy" />

      <div className="collection-card__body">
        <h3 className="collection-card__title visually-hidden">{title}</h3>
        <div className="collection-card__extra-info">
          {(isTrending ||
            isMustWatch ||
            isNewReleaseShow ||
            isTrendingShow) &&
            durationBadge}
          {isTrending && viewsBadge}
          {isNewRelease && newReleaseBadge}
          {isMustWatch && ratingBadge}
          {(isNewReleaseShow || isTrendingShow) && seasonBadge}
        </div>
      </div>
    </a>
  );
};

export default MovieShowCollectionCard;
