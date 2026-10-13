import "./AccordionItem.scss";

const AccordionItem = (props) => {
  const { title, description, isOpen = false, titleId, detailsName } = props;
  return (
    <div className="accordion-item">
      <details
        className="accordion-item__details"
        open={isOpen}
        name={detailsName}
      >
        <summary className="accordion-item__summary">
          <h3 className="h5 accordion-item__title">
            <span role="term" aria-details={titleId}>
              {title}
            </span>
          </h3>
        </summary>
      </details>
      <div className="accordion-item__content" id={titleId} role="definition">
        <div className="accordion-item__content-inner">
          <div className="accordion-item__content-body">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
