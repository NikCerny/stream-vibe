import ShowSeasons from "@/components/ShowSeasons";
import MovieDetails from "@/sections/MovieDetails";
import ShowBanner from "@/sections/ShowBanner";
import movieItems from "@/sections/MoviesBanner/movieItems";
import titleFormatted from "@/utils/titleFormatted";

export const metadata = {
  title: "Show - Stranger Things",
};

export const getStaticData = () =>
  movieItems
    .filter((item) => item.isShow === true)
    .map((item) => ({
      paths: { title: titleFormatted(item.title) },
      props: { movieTitle: item.title },
    }));

export default function ({ movieTitle }) {
  return (
    <>
      <ShowBanner movieTitle={movieTitle}></ShowBanner>
      <MovieDetails
        movieTitle={movieTitle}
        showSeasons={<ShowSeasons></ShowSeasons>}
      ></MovieDetails>
    </>
  );
}
