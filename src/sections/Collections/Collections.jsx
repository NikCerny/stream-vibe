import "./Collections.scss";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import CategoryCard from "@/components/CategoryCard";
import movieItems from "./movieItems";

const Collections = (props) => {
  const titleId = "collections-title";

  return (
    <section aria-labelledby={titleId} className="collections container">
      <h2 className="visually-hidden" id={titleId}>
        Movies and Shows Collections
      </h2>
      <ul className="collections__list">
        {movieItems.map((movieItem, index) => {
          return (
            <li className="collections__item" key={index}>
              <header className="collections__header">
                <h3 className="collections__title">{movieItem.title}</h3>
                <SliderNavigation
                  mode="tile"
                  id={`${movieItem.title.replaceAll(" ", "-")}-slider-navigation`}
                />
              </header>
              <div className="collections__body">
                <Slider
                  navigationTargetElementId={`${movieItem.title.replaceAll(" ", "-")}-slider-navigation`}
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
    </section>
  );
};

export default Collections;
