import classNames from "classnames";
import "./Button.scss";
import Icon from "@/components/Icon";

const Button = (props) => {
  const {
    label,
    isLabelHidden = false,
    type = "button",
    mode, // default || transparent || black-10 || black-08 || black-06
    className,
    iconName,
    hasFillIcon = false,
    iconPosition = "before", // || after
    dataJsAttrs,
  } = props;

  const title = isLabelHidden ? label : undefined;
  const modeClass = mode ? `button--${mode}` : undefined;
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon}></Icon>
  );

  return (
    <button
      className={classNames(className, "button", modeClass)}
      title={title}
      aria-label={title}
      type={type}
      {...dataJsAttrs}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </button>
  );
};

export default Button;
