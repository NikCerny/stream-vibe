import "./MoviesBanner.scss";
import MovieBannerCard from "@/components/MovieBannerCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import movieItems from "./movieItems";
import titleFormatted from "@/utils/titleFormatted";
import withBase from "@/utils/withBase";

const MoviesBanner = (props) => {
  const titleId = "movies-banner-title";
  const sliderNavigationId = "movies-banner-slider-navigation";
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
      <div className="movies-banner__inner">
        <Slider
          sliderParams={sliderParams}
          navigationTargetElementId={sliderNavigationId}
          hasScrollbar={false}
        >
          {movieItems.map((item, index) => (
            <MovieBannerCard
              {...item}
              videoSrc={undefined}
              href={withBase(`${item.isShow ? "show" : "movie"}/${titleFormatted(item.title)}`)}
              key={index}
            />
          ))}
        </Slider>

        <SliderNavigation
          id={sliderNavigationId}
          className="movies-banner__navigation hidden-mobile"
        />
      </div>
    </section>
  );
};

export default MoviesBanner;
