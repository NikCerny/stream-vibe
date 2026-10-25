import "./CastCard.scss";
import { Image } from "minista/assets";

const CastCard = (props) => {
  const { imgSrc, imgAlt, extraInfo = false, hasWidthImgAlt = false } = props;
  return (
    <div className="cast-card">
      <Image
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
        loading="lazy"
        className="cast-card__image"
      ></Image>
      {extraInfo && (
        <div className="cast-card__body">
          <h4 className="cast-card__name">{imgAlt}</h4>
          <p className="cast-card__extra-info">From {extraInfo}</p>
        </div>
      )}
    </div>
  );
};

export default CastCard;
