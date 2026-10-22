import classNames from "classnames";
import "./Badge.scss";

const Badge = (props) => {
  const {
    className,
    mode, // default || accent(red)
    isLarger = false,
    children,
  } = props;
  const modeClass = mode ? `badge--${mode}` : "";
  const paddingExpandedClass = isLarger ? `badge--larger` : "";
  return (
    <div
      className={classNames(
        "badge",
        className,
        modeClass,
        paddingExpandedClass,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
