import classNames from "classnames";
import "./Header.scss";
import Button from "@/components/Button";
import Link from "@/components/Link";
import BurgerButton from "@/components/BurgerButton";

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
        className={classNames("header__menu-link link", {
          "is-active": href === url,
        })}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Link
          className="header__logo logo"
          hasLogo
          isLabelHidden
          loading="eager"
          label="Home"
        ></Link>
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">{renderItems}</ul>
          </nav>
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
        </dialog>
        <BurgerButton
          className="header__burger-button visible-mobile"
          dataJsAttrs={{ "data-js-overlay-menu-burger-button": "" }}
        ></BurgerButton>
      </div>
    </header>
  );
};

export default Header;
