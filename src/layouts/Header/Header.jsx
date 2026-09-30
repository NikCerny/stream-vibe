import classNames from "classnames";
import "./Header.scss";
import Button from "@/components/Button";

const Header = (props) => {
  const { url } = props;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Movies & Shows", href: "/movies" },
    { label: "Support", href: "/support" },
    { label: "Subscriptions", href: "/subscriptions" },
  ];

  const renderItems = menuItems.map(({ label, href }) => (
    <li className="header__menu-item" key={href}>
      <a
        href={href}
        className={classNames("header__menu-link", {
          "is-active": href === url,
        })}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <div className="header__inner container">
        <a
          href="/"
          className="header__logo logo"
          aria-label="Home"
          title="Home"
        >
          <img
            src="src/assets/images/Logo.svg"
            alt="Stream Vibe logo"
            width={200}
            height={60}
          />
        </a>
      </div>
      {/* <dialog className="header__overlay-menu-dialog" open> */}
      <nav className="header__menu">
        <ul className="header__menu-list">{renderItems}</ul>
      </nav>
      {/* </dialog> */}
      <div className="header__actions">
        <Button
          className="header__button"
          label="Search"
          isLabelHidden
          iconName="search"
          mode="transparent"
        ></Button>
        <Button
          className="header__button"
          label="Notifications"
          isLabelHidden
          iconName="notification"
          mode="transparent"
        ></Button>
      </div>
    </header>
  );
};

export default Header;
