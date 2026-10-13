import "./Accordion.scss";
import classNames from "classnames";

const Accordion = (props) => {
  const { cols = 1, children, isOrderedList = true } = props;

  const ListTag = isOrderedList ? "ol" : "ul";
  const accordionCols = cols > 1 ? `accordion--${cols}` : "";
  const hasCounter = isOrderedList ? "accordion--has-counter" : "";
  return (
    <ListTag className={classNames("accordion", accordionCols, hasCounter)}>
      {children.map((itemContent, index) => (
        <li className="accordion__item" key={index}>
          {itemContent}
        </li>
      ))}
    </ListTag>
  );
};

export default Accordion;
