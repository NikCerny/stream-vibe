import PlansComparison from "@/sections/PlansComparison";
import TarifPlans from "@/sections/TarifPlans";

export const metadata = {
  title: "Subscriptions",
};

export default function () {
  return (
    <>
      <TarifPlans></TarifPlans>
      <PlansComparison></PlansComparison>
    </>
  );
}
