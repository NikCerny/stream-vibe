import "./Collections.scss";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import CategoryCard from "@/components/CategoryCard";
import movieItems from "./movieItems";
import showItems from "./showItems";
import Tabs from "@/components/Tabs";
import MovieShowCollectionCard from "@/components/MovieShowCollectionCard";
import titleFormatted from "@/utils/titleFormatted";

const Collections = () => {
  const titleId = "collections-title";
  const tabsNavigationId = "collections-tabs-navigation";

  const sliderTitleIdFormatted = (title, prefix) => {
    return `${titleFormatted(`${title}-${prefix}`)}-slider-navigation`;
  };

  const renderCollections = (items, type) => {
    const isShow = type === "shows";
    const prefix = isShow ? "show" : "movie";

    return (
      <ul className={`collections__list collections__list--${type}-badge`}>
        {items.map((collection, index) => {
          const sliderNavigationId = sliderTitleIdFormatted(
            collection.title,
            prefix,
          );

          return (
            <li className="collections__item" key={index}>
              <header className="collections__header">
                <h3 className="collections__title">{collection.title}</h3>
                <SliderNavigation mode="tile" id={sliderNavigationId} />
              </header>
              <div className="collections__body">
                <Slider
                  navigationTargetElementId={sliderNavigationId}
                  isBeyondTheViewportOnMobileS
                  sliderParams={collection?.sliderParams}
                >
                  {collection.items.map((item, itemIndex) =>
                    collection?.isCategory ? (
                      <CategoryCard {...item} key={itemIndex} />
                    ) : (
                      <MovieShowCollectionCard
                        key={itemIndex}
                        {...item}
                        isTrending={collection.isTrending}
                        isTrendingShow={collection.isTrendingShow}
                        isNewRelease={collection.isNewRelease}
                        isNewReleaseShow={collection.isNewReleaseShow}
                        isMustWatch={collection.isMustWatch}
                      />
                    ),
                  )}
                </Slider>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  const tabsContent = [
    {
      children: renderCollections(movieItems, "movies"),
      title: "Movies",
      isActive: true,
    },
    { children: renderCollections(showItems, "shows"), title: "Shows" },
  ];

  return (
    <section aria-labelledby={titleId} className="collections container">
      <h2 className="visually-hidden" id={titleId}>
        Movies and Shows Collections
      </h2>
      <Tabs
        idTabButton={tabsNavigationId}
        titleId="collections-tabs"
        className="collections__tabs"
        isEnableOnlyOnMobile
        tabsContent={tabsContent}
      />
    </section>
  );
};

export default Collections;
