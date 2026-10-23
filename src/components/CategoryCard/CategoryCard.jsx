import "./CategoryCard.scss";
import { Image } from "minista/assets";
import Icon from "@/components/Icon";
import classNames from "classnames";
import Badge from "@/components/Badge";

const CategoryCard = (props) => {
  const {
    title,
    images = [],
    badgeContent,
  } = props;

  return (
    <a className={classNames("category-card")} href="/movies">
      <div className="category-card__images">
        {images.map((imgSrc) => (
          <div className="category-card__image-wrapper" key={imgSrc}>
            <Image
              className="category-card__image"
              src={imgSrc}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badgeContent && (
            <Badge className="category-card__badge" mode="accent" isLarger>
              {badgeContent}
            </Badge>
          )}
          <span className="category-card__title--larger">{title}</span>
        </h3>

        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </a>
  );
};

export default CategoryCard;
