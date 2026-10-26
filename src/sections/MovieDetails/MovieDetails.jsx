import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import "./MovieDetails.scss";
import movieItems from "@/sections/MoviesBanner/movieItems";
import Slider from "@/components/Slider";
import CastCard from "@/components/CastCard";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Icon from "@/components/Icon";
import Tags from "@/components/Tags";
import Ratings from "@/components/Ratings";

const MovieDetails = ({ showSeasons, movieTitle }) => {
  const titleId = "movie-details-title";
  const castSliderNavigationId = "movie-cast-slider-navigation";
  const reviewsSliderNavigationId = "movie-reviews-slider-navigation";
  const isShow = Boolean(showSeasons);
  const movieItem =
    movieItems.find((item) => item.title === movieTitle) ??
    movieItems.find((item) => item.isShow === isShow);
  const {
    description,
    releasedYear,
    availableLanguages,
    ratings,
    genres,
    director,
    music,
    castItems,
    reviewItems,
  } = movieItem;
  return (
    <section className="movie-details container" aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        {showSeasons && (
          <div className="movie-details__panel movie-details__panel--seasons">
            <h3 className="h4">Seasons and Episodes</h3>
            {showSeasons}
          </div>
        )}
        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__content">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">{description}</div>
          </div>
        </div>
        {castItems.length > 0 && (
          <div className="movie-details__panel">
            <header className="movie-details__panel-header">
              <h3 className="movie-details__title">Cast</h3>
              <SliderNavigation
                id={castSliderNavigationId}
                hasPagination={false}
                mode="circle"
                buttonMode="black-08"
              ></SliderNavigation>
            </header>
            <Slider
              navigationTargetElementId={castSliderNavigationId}
              hasScrollbar={false}
              sliderParams={{
                slidesPerView: "auto",
                spaceBetween: 10,
                breakpoints: {
                  1024: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                    allowTouchMove: false,
                  },
                },
              }}
            >
              {castItems.map((item, index) => (
                <CastCard {...item} key={index}></CastCard>
              ))}
            </Slider>
          </div>
        )}
        {reviewItems.length > 0 && (
          <div className="movie-details__panel movie-details__panel--reviews">
            <header className="movie-details__panel-header">
              <h3 className="movie-details__title">Reviews</h3>
              <Button
                mode="black-08"
                iconName="plus"
                label="Add Your Review"
              ></Button>
            </header>
            <Slider
              navigationTargetElementId={reviewsSliderNavigationId}
              hasScrollbar={false}
              sliderParams={{
                slidesPerView: 2,
                slidesPerGroup: 2,

                breakpoints: {
                  0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
                  1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                    allowTouchMove: false,
                  },
                },
              }}
            >
              {reviewItems.map((item, index) => (
                <ReviewCard {...item} key={index}></ReviewCard>
              ))}
            </Slider>
            <SliderNavigation
              id={reviewsSliderNavigationId}
              mode="circle"
              buttonMode="black-08"
              isNavigationMobileHidden={false}
              className="movie-details__navigation-reviews"
            ></SliderNavigation>
          </div>
        )}
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar"></Icon>
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" dateTime={releasedYear}>
                  {releasedYear}
                </time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate"></Icon>
                <span>Available Languages</span>
              </h3>
              <Tags items={availableLanguages}></Tags>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star"></Icon>
                <span>Ratings</span>
              </h3>
              <Ratings items={ratings}></Ratings>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres"></Icon>
                <span>Genres</span>
              </h3>
              <Tags items={genres}></Tags>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              {director.imgSrc ? (
                <CastCard
                  extraInfo={director.country}
                  imgSrc={director.imgSrc}
                  imgAlt={director.name}
                ></CastCard>
              ) : (
                <p className="h6">{director.name}</p>
              )}
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              {music.imgSrc ? (
                <CastCard
                  extraInfo={music.country}
                  imgSrc={music.imgSrc}
                  imgAlt={music.name}
                ></CastCard>
              ) : (
                <p className="h6">{music.name}</p>
              )}
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default MovieDetails;
