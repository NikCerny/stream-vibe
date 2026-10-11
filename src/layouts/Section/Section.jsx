import classNames from "classnames";
import "./Section.scss";

const Section = (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actions = false,
    isActionsMobileHidden = false,
    children,
  } = props;
  const hiddenMobile = isActionsMobileHidden ? "hidden-mobile" : "";
  return (
    <section
      className={classNames("section", "container", className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__subtitle">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && (
          <div className={classNames("section__actions", hiddenMobile)}>
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  );
};

export default Section;
