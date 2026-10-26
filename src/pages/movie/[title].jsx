import MovieBanner from "@/sections/MovieBanner";
import MovieDetails from "@/sections/MovieDetails";
import movieItems from "@/sections/MoviesBanner/movieItems";
import titleFormatted from "@/utils/titleFormatted";

export const metadata = {
  title: "Movie - Kantara",
};

export const getStaticData = () =>
  movieItems
    .filter((item) => item.isShow === false)
    .map((item) => ({
      paths: { title: titleFormatted(item.title) },
      props: { movieTitle: item.title },
    }));

export default function ({ movieTitle }) {
  return (
    <>
      <MovieBanner movieTitle={movieTitle}></MovieBanner>
      <MovieDetails movieTitle={movieTitle}></MovieDetails>
    </>
  );
}
