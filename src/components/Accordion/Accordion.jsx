import "./Accordion.scss";

const Accordion = (props) => {
  const { title, description, isOpen = false, titleId, detailsName } = props;
  return (
    <div className="accordion">
      <details className="accordion__details" open={isOpen} name={detailsName}>
        <summary className="accordion__summary">
          <h3 className="h5 accordion__title">
            <span role="term" aria-details={titleId}>
              {title}
            </span>
          </h3>
        </summary>
      </details>
      <div className="accordion__content" id={titleId} role="definition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
