import "./DeviceCard.scss";

const DeviceCard = (props) => {
  const { title, description, src } = props;
  return (
    <div className="device-card">
      <header className="device-card__header">
        <div className="device-card__image-wrapper">
          <img
            src={src}
            alt=""
            className="device-card__image"
            width={40}
            height={40}
            loading="lazy"
          />
        </div>
        <h3 className="device-card__title h4">{title}</h3>
      </header>
      <div className="device-card__description">{description}</div>
    </div>
  );
};

export default DeviceCard;
