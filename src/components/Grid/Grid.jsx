import classNames from "classnames";
import "./Grid.scss";

const Grid = (props) => {
  const { children, cols = 1 } = props;

  const gridCols = cols > 1 ? `grid--${cols}` : "";
  return (
    <ul className={classNames("grid", gridCols)}>
      {children.map((itemContent, index) => (
        <li className="grid__item" key={index}>
          {itemContent}
        </li>
      ))}
    </ul>
  );
};

export default Grid;
