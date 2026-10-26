import "./ShowBanner.scss";
import movieItems from "@/sections/MoviesBanner/movieItems";
import MovieBannerCard from "@/components/MovieBannerCard";

const ShowBanner = ({ movieTitle }) => {
  const titleId = "show-banner-title";
  const showItem =
    movieItems.find((item) => item.title === movieTitle) ??
    movieItems.find((item) => item.isShow);

  return (
    <section aria-labelledby={titleId} className="show-banner container">
      <MovieBannerCard
        title={showItem.title}
        description={showItem.description}
        bannerSrc={showItem.bannerSrc}
        videoSrc={showItem.videoSrc}
        autoPlayOnNavigate
        TitleTag="h1"
        titleId={titleId}
      />
    </section>
  );
};

export default ShowBanner;
