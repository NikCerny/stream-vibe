import Categories from "@/sections/Categories";
import Hero from "@/sections/Hero";

export const metadata = {
  title: "Home",
  isPositionFixed: true,
};

export default function () {
  return (
    <>
      <Hero></Hero>
      <Categories></Categories>
    </>
  );
}
