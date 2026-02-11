import "./Header.scss"
import Logo from "@/components/Logo"
import Button from "@/components/Button"
import classNames from "classnames"
import BurgerButton from "@/components/BurgerButton"

const Header = (props) => {
  const { url, isFixed } = props

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Movies & Shows", href: "/movies" },
    { label: "Support", href: "/support" },
    { label: "Subscriptions", href: "/subscriptions" },
  ]

  const menuList = menuItems.map(({ label, href }) => (
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
  ))

  return (
    <header
      className={classNames("header", { "is-fixed": isFixed })}
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo loading="eager" className="header__logo"></Logo>
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">{menuList}</ul>
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
          className="header__burger-button visible-tablet"
          extraAttrs={{ "data-js-overlay-menu-burger-button": "" }}
        ></BurgerButton>
      </div>
    </header>
  )
}

export default Header
