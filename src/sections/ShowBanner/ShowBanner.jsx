import "./ShowBanner.scss";
import movieItems from "@/sections/MoviesBanner/movieItems";
import MovieBannerCard from "@/components/MovieBannerCard";

const ShowBanner = (props) => {

  const titleId = "show-banner-title";

  return (
    <section aria-labelledby={titleId} className="show-banner container">
      <MovieBannerCard
        title={movieItems[2].title}
        description={movieItems[2].description}
        bannerSrc={movieItems[2].bannerSrc}
        TitleTag="h1"
        titleId={titleId}
      />
    </section>
  );
};

export default ShowBanner;
