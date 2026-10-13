import "./AccordionGroup.scss";
import classNames from "classnames";

const AccordionGroup = (props) => {
  const { cols = 1, children, isOrderedList = true } = props;

  const ListTag = isOrderedList ? "ol" : "ul";
  const accordionCols = cols > 1 ? `accordion-group--${cols}` : "";
  const hasCounter = isOrderedList ? "accordion-group--has-counter" : "";
  return (
    <ListTag
      className={classNames("accordion-group", accordionCols, hasCounter)}
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
