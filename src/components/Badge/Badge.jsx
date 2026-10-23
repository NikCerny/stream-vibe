import classNames from "classnames";
import "./Badge.scss";
import Icon from "@/components/Icon";

const Badge = (props) => {
  const {
    className,
    mode, // default || accent(red)
    isLarger = false,
    iconName,
    iconPosition = "before", // || after
    children,
  } = props;
  const modeClass = mode ? `badge--${mode}` : "";
  const paddingExpandedClass = isLarger ? `badge--larger` : "";
  const iconComponent = iconName && (
    <Icon className="badge__icon" name={iconName} hasFill></Icon>
  );
  return (
    <div
      className={classNames(
        "badge",
        className,
        modeClass,
        paddingExpandedClass,
      )}
    >
      {iconPosition === "before" && iconComponent}
      {children}
      {iconPosition === "after" && iconComponent}
    </div>
  );
};

export default Badge;
