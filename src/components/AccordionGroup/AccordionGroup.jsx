import "./AccordionGroup.scss";
import classNames from "classnames";

const AccordionGroup = (props) => {
  const {
    className,
    cols = 1,
    children,
    isOrderedList = true,
    mode, // default || dark
  } = props;

  const ListTag = isOrderedList ? "ol" : "ul";
  const accordionCols = cols > 1 ? `accordion-group--${cols}` : "";
  const accordMode = mode ? `accordion-group--${mode}` : "";
  const hasCounter = isOrderedList ? "accordion-group--has-counter" : "";
  return (
    <ListTag
      className={classNames(
        "accordion-group",
        className,
        accordionCols,
        hasCounter,
        accordMode,
      )}
    >
      {children.map((itemContent, index) => (
        <li className="accordion-group__item" key={index}>
          {itemContent}
        </li>
      ))}
    </ListTag>
  );
};

export default AccordionGroup;
