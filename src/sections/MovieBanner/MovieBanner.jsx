import "./MovieBanner.scss";
import MovieBannerCard from "@/components/MovieBannerCard";
import movieItems from "@/sections/MoviesBanner/movieItems";

const MovieBanner = ({ movieTitle }) => {
  const titleId = "movie-banner-title";
  const movieItem =
    movieItems.find((item) => item.title === movieTitle) ??
    movieItems.find((item) => item.isShow === false);

  return (
    <section aria-labelledby={titleId} className="movie-banner container">
      <MovieBannerCard
        title={movieItem.title}
        description={movieItem.description}
        bannerSrc={movieItem.bannerSrc}
        videoSrc={movieItem.videoSrc}
        autoPlayOnNavigate
        TitleTag="h1"
        titleId={titleId}
      />
    </section>
  );
};

export default MovieBanner;
