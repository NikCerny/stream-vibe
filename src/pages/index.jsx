import Categories from "@/sections/Categories";
import Hero from "@/sections/Hero";
import Devices from "@/sections/Devices";
import Questions from "@/sections/Questions";

export const metadata = {
  title: "Home",
  isPositionFixed: true,
};

export default function () {
  return (
    <>
      <Hero></Hero>
      <Categories></Categories>
      <Devices></Devices>
      <Questions></Questions>
    </>
  );
}
