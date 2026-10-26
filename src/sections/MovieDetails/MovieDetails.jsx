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

const MovieDetails = ({ showSeasons }) => {
  const titleId = "movie-details-title";
  const castSliderNavigationId = "movie-cast-slider-navigation";
  const reviewsSliderNavigationId = "movie-reviews-slider-navigation";
  const castItems = [
    {
      imgSrc: "/src/assets/images/cast/kantara/1.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/2.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/3.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/4.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/5.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/6.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/7.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/8.jpg",
      imgAlt: "Rishab Shetty",
    },
    {
      imgSrc: "/src/assets/images/cast/kantara/3.jpg",
      imgAlt: "Rishab Shetty",
    },
  ];
  const reviewItems = [
    {
      name: "Aniket Roy",
      fromCountry: "India",
      reviewText:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      rating: 4.5,
    },
    {
      name: "Swaraj",
      fromCountry: "India",
      reviewText:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      rating: 5,
    },
    {
      name: "Next Example",
      fromCountry: "Example",
      reviewText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque consequuntur dolores in mollitia eius. Doloribus voluptate quaerat dolore rem aperiam laboriosam. Aliquid iure possimus numquam quas. Aspernatur, provident maiores?",
      rating: 3,
    },
  ];
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
            <div className="movie-details__description">
              {movieItems[1].description}
            </div>
          </div>
        </div>
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
                <time className="h6" dateTime="2022">
                  2022
                </time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate"></Icon>
                <span>Available Languages</span>
              </h3>
              <Tags
                items={["English", "Hindi", "Tamil", "Telegu", "Kannada"]}
              ></Tags>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star"></Icon>
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: "IMDb", ratingValue: 4.5 },
                  { title: "Streamvibe", ratingValue: 4 },
                ]}
              ></Ratings>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres"></Icon>
                <span>Genres</span>
              </h3>
              <Tags items={["Action", "Adventure"]}></Tags>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              <CastCard
                extraInfo="India"
                imgSrc="/src/assets/images/cast/kantara/1.jpg"
                imgAlt="Rishab Shetty"
              ></CastCard>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              <CastCard
                extraInfo="India"
                imgSrc="/src/assets/images/cast/kantara/8.jpg"
                imgAlt="B. Ajaneesh Loknath"
              ></CastCard>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default MovieDetails;
