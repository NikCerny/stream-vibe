import classNames from "classnames";
import "./Link.scss";

const Link = (props) => {
  const {
    hasLogo = false,
    isLabelHidden = false,
    loading = "lazy",
    className,
    label = "Home",
    href = "/",
    target,
  } = props;
  const linkProps = { href, target };
  const title = isLabelHidden ? label : undefined;

  const logoComponent = hasLogo && (
    <img
      src="/Logo.svg"
      alt="Stream Vibe logo"
      className="logo__image"
      width={200}
      height={60}
      loading={loading}
    ></img>
  );

  return (
    <a
      className={classNames(className, { "link": !hasLogo })}
      title={title}
      aria-label={title}
      {...linkProps}
    >
      {logoComponent}
    </a>
  );
};

export default Link;
