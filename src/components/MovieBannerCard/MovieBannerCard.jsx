import "./MovieBannerCard.scss";
import Button from "@/components/Button";
import Link from "@/components/Link";
import Icon from "@/components/Icon";

const MovieBannerCard = (props) => {
  const {
    title,
    description,
    bannerSrc,
    videoSrc,
    autoPlayOnNavigate = false,
    href,
    TitleTag = "h2",
    titleId,
  } = props;
  return (
    <div
      className="movie-banner-card"
      style={{ "--movieBannerImage": `url("${bannerSrc}")` }}
      data-js-video-player={videoSrc ? "" : undefined}
      data-js-video-player-autoplay-on-navigate={
        autoPlayOnNavigate ? "" : undefined
      }
    >
      {videoSrc && (
        <video
          className="movie-banner-card__video"
          src={videoSrc}
          poster={bannerSrc}
          preload={href ? "none" : "auto"}
          data-js-video-player-video=""
        ></video>
      )}
      <div className="movie-banner-card__content">
        <TitleTag className="movie-banner-card__title h3" id={titleId}>
          {title}
        </TitleTag>
        <div className="movie-banner-card__description hidden-mobile">
          <p>{description}</p>
        </div>
        <div className="movie-banner-card__actions">
          {href ? (
            <Link
              className="movie-banner-card__play-button button"
              href={href}
              content={
                <>
                  <Icon className="button__icon" name="play" hasFill />
                  <span className="button__label">Play Now</span>
                </>
              }
              dataJsAttrs={{ "data-js-video-player-navigation": "" }}
            />
          ) : videoSrc ? (
            <Button
              className="movie-banner-card__play-button is-active"
              iconName="play"
              hasFillIcon
              label="Play Now"
              dataJsAttrs={{ "data-js-video-player-play-button": "" }}
            ></Button>
          ) : (
            <Button
              className="movie-banner-card__play-button"
              iconName="play"
              hasFillIcon
              label="Play Now"
            ></Button>
          )}
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
