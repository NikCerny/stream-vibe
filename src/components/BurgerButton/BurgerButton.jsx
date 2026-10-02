import classNames from "classnames";
import "./BurgerButton.scss";

const BurgerButton = (props) => {
  const { className, dataJsAttrs } = props;
  return (
    <button
      className={classNames(className, "burger-button")}
      type="button"
      aria-label="Open navigation menu"
      title="Open navigation menu"
      {...dataJsAttrs}
    >
      <span class="burger-button__line"></span>
      <span class="burger-button__line"></span>
      <span class="burger-button__line"></span>
    </button>
  );
};

export default BurgerButton;
