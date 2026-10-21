import "./Collections.scss";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import CategoryCard from "@/components/CategoryCard";
import movieItems from "./movieItems";
import showItems from "./showItems";

const Collections = (props) => {
  const titleId = "collections-title";

  const sliderTitleIdFormatted = (title, prefix) => {
    return `${title.replaceAll(" ", "-")}-${prefix}-slider-navigation`
      .replace(/-{2,}/g, "-")
      .toLowerCase();
  };

  return (
    <section aria-labelledby={titleId} className="collections container">
      <h2 className="visually-hidden" id={titleId}>
        Movies and Shows Collections
      </h2>
      <ul className="collections__list collections__list--movies-badge">
        {movieItems.map((movieItem, index) => {
          return (
            <li className="collections__item" key={index}>
              <header className="collections__header">
                <h3 className="collections__title">{movieItem.title}</h3>
                <SliderNavigation
                  mode="tile"
                  id={sliderTitleIdFormatted(movieItem.title, "movie")}
                />
              </header>
              <div className="collections__body">
                <Slider
                  navigationTargetElementId={sliderTitleIdFormatted(
                    movieItem.title,
                    "movie",
                  )}
                  isBeyondTheViewportOnMobileS
                  sliderParams={movieItem?.sliderParams}
                >
                  {movieItem.items.map((item, index) => (
                    <CategoryCard
                      {...item}
                      isPopular={movieItem?.isPopular}
                      isTrending={movieItem?.isTrending}
                      isNewRelease={movieItem?.isNewRelease}
                      isMustWatch={movieItem?.isMustWatch}
                      key={index}
                    />
                  ))}
                </Slider>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="collections__list collections__list--shows-badge">
        {showItems.map((showItem, index) => {
          return (
            <li className="collections__item" key={index}>
              <header className="collections__header">
                <h3 className="collections__title">{showItem.title}</h3>
                <SliderNavigation
                  mode="tile"
                  id={sliderTitleIdFormatted(showItem.title, "show")}
                />
              </header>
              <div className="collections__body">
                <Slider
                  navigationTargetElementId={sliderTitleIdFormatted(
                    showItem.title,
                    "show",
                  )}
                  isBeyondTheViewportOnMobileS
                  sliderParams={showItem?.sliderParams}
                >
                  {showItem.items.map((item, index) => (
                    <CategoryCard
                      {...item}
                      isPopular={showItem?.isPopular}
                      isTrending={showItem?.isTrending}
                      isNewReleaseShow={showItem?.isNewReleaseShow}
                      isMustWatch={showItem?.isMustWatch}
                      key={index}
                    />
                  ))}
                </Slider>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Collections;
