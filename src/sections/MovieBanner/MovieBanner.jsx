import "./MovieBanner.scss";
import MovieBannerCard from "@/components/MovieBannerCard";
import movieItems from "@/sections/MoviesBanner/movieItems";

const MoviesBanner = (props) => {
  const titleId = "movie-banner-title";

  return (
    <section aria-labelledby={titleId} className="movie-banner container">
      <MovieBannerCard
        title={movieItems[1].title}
        description={movieItems[1].description}
        bannerSrc={movieItems[1].bannerSrc}
        TitleTag="h1"
        titleId={titleId}
      />
    </section>
  );
};

export default MoviesBanner;
