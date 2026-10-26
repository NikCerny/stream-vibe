import "./Accordion.scss";
import classNames from "classnames";
import Icon from "@/components/Icon";

const Accordion = (props) => {
  const {
    title,
    subtitle,
    isOpen = false,
    titleId,
    detailsName,
    hasArrowButton = false,
    titleClassName = "",
    children,
  } = props;
  return (
    <div className="accordion">
      <details className="accordion__details" open={isOpen} name={detailsName}>
        <summary className="accordion__summary">
          <h3 className={classNames("accordion__title", titleClassName)}>
            <span role="term" aria-details={titleId}>
              {title}
            </span>
            {subtitle && (
              <span className="accordion__subtitle">{subtitle}</span>
            )}
            {hasArrowButton && (
              <div className="accordion__arrow">
                <Icon name="arrow-down" />
              </div>
            )}
          </h3>
        </summary>
      </details>
      <div className="accordion__content" id={titleId} role="definition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
