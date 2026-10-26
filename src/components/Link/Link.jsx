import classNames from "classnames";
import Icon from "@/components/Icon";
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
    iconName,
    hasFillIcon = false,
    mode,
    content = "",
    dataJsAttrs,
  } = props;
  const linkProps = { href, target };
  const title = isLabelHidden ? label : undefined;
  const modeClass = mode ? `button--${mode}` : undefined;

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

  const iconComponent = iconName && (
    <Icon className="link__icon" name={iconName} hasFill={hasFillIcon}></Icon>
  );

  return (
    <a
      className={classNames({ link: !hasLogo }, className, modeClass)}
      title={title}
      aria-label={title}
      {...linkProps}
      {...dataJsAttrs}
    >
      {logoComponent}
      {iconComponent}
      {content}
    </a>
  );
};

export default Link;
