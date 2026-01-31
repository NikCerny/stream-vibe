import classNames from "classnames"
import Button from "@/components/Button"
import "./Socials.scss"

const Socials = (props) => {
  const { className, links = [] } = props

  const list = links.map(({ label, iconName }, index) => (
    <li className="socials__item" key={index}>
      <Button
        className="socials__link"
        href="/"
        target="_blank"
        mode="black-10"
        label={label}
        isLabelHidden
        iconName={iconName}
        hasFillIcon
      ></Button>
    </li>
  ))

  return (
    <div className={classNames(className, "socials")}>
      <ul className="socials__list">{list}</ul>
    </div>
  )
}

export default Socials
