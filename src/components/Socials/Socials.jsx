import classNames from "classnames";
import "./Socials.scss";
import Link from "@/components/Link";

const Socials = (props) => {
  const { className, links = [] } = props;

  return (
    <div className={classNames(className, "socials")}>
      <ul className="socials__list">
        {links.map(({ label, iconName }) => (
          <li className="socials__item" key={label}>
            <Link
              className="socials__link"
              href={`https://www.${label.toLowerCase()}.com`}
              isLabelHidden
              label={label}
              target="_blank"
              iconName={iconName}
              mode="black-10"
            ></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
