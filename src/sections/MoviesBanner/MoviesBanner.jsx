import "./MoviesBanner.scss";
import MovieBannerCard from "@/components/MovieBannerCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const MoviesBanner = (props) => {
  const titleId = "movies-banner-title";
  const sliderNavigationId = "movies-banner-slider-navigation";
  const movieItems = [
    {
      title: "Avengers : Endgame",
      description:
        "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
      bannerSrc: "/src/assets/images/moviesBanner/avengers.jpg",
    },
    {
      title: "Kantara",
      description:
        "A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.",
      bannerSrc: "/src/assets/images/moviesBanner/kantara.jpg",
    },
    {
      title: "Stranger Things",
      description:
        "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      bannerSrc: "/src/assets/images/moviesBanner/stranger-things.jpg",
    },
  ];
  const sliderParams = {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    breakpoints: { 768: { allowTouchMove: false } },
  };

  return (
    <section aria-labelledby={titleId} className="movies-banner container">
      <h1 className="visually-hidden" id={titleId}>
        Movies and Shows
      </h1>
      <div className="movie-banner-card">
        <Slider
          sliderParams={sliderParams}
          navigationTargetElementId={sliderNavigationId}
          hasScrollbar={false}
        >
          {movieItems.map((item, index) => (
            <MovieBannerCard {...item} key={index} />
          ))}
        </Slider>

        <SliderNavigation
          id={sliderNavigationId}
          className="movie-banner-card__navigation hidden-mobile"
        />
      </div>
    </section>
  );
};

export default MoviesBanner;
