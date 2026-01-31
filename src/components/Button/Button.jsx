import Icon from "@/components/Icon"
import "./Button.scss"
import classNames from "classnames"

const Button = (props) => {
  const {
    href,
    type = "button",
    target,
    className,
    label,
    isLabelHidden = false,
    iconName,
    iconPosition = "before", // default || after
    hasFillIcon,
    mode = "", // default || transparent || black-10
  } = props
  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const buttonOrLinkProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon}></Icon>
  )

  return (
    <Component
      className={classNames(className, "button", { [`button--${mode}`]: mode })}
      title={title}
      aria-label={title}
      {...buttonOrLinkProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
