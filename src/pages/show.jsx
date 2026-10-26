import ShowSeasons from "@/components/ShowSeasons";
import MovieDetails from "@/sections/MovieDetails";
import ShowBanner from "@/sections/ShowBanner";

export const metadata = {
  title: "Show - Stranger Things",
};

export default function () {
  return (
    <>
      <ShowBanner></ShowBanner>
      <MovieDetails showSeasons={<ShowSeasons></ShowSeasons>}></MovieDetails>
    </>
  );
}
