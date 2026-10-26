import "./ShowEpisodeCard.scss";
import Icon from "@/components/Icon";

const ShowEpisodeCard = (props) => {
  const { number, title, description, duration, video } = props;

  return (
    <div className="episode-card">
      <div className="episode-card__number">{number}</div>
      <div className="episode-card__player" data-js-video-player="">
        <video
          className="episode-card__video"
          src={video.src}
          poster={video.poster}
          width={172}
          height={118}
          data-js-video-player-video=""
        />
        <button
          className="episode-card__play-button is-active"
          type="button"
          aria-label="Play video"
          title="Play video"
          data-js-video-player-play-button=""
        >
          <Icon
            className="episode-card__play-button-icon"
            name="play-show-episode"
          />
        </button>
      </div>
      <div className="episode-card__body">
        <div className="episode-card__info">
          <h4 className="episode-card__title h6">{title}</h4>
          <div className="episode-card__duration">
            <Icon name="watches-alt" />
            <span className="visually-hidden">Duration: </span>
            <span>{duration}</span>
          </div>
        </div>
        <div className="episode-card__description hidden-mobile">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowEpisodeCard;
