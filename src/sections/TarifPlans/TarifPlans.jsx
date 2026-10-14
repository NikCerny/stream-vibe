import TarifPlanCard from "@/components/TarifPlanCard";
import "./TarifPlans.scss";
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import Button from "@/components/Button";

const TarifPlans = () => {
  const title = "Choose the plan that's right for you";
  const description =
    "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!";
  const plansInfo = [
    {
      title: "Basic Plan",
      description:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: { value: "9.99", period: "month" },
    },
    {
      title: "Standard Plan",
      description:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      price: { value: "12.99", period: "month" },
    },
    {
      title: "Premium Plan",
      description:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
      price: { value: "14.99", period: "month" },
    },
  ];

  const buttons = <Button label="monthly"></Button>

  return (
    <Section
      title={title}
      description={description}
      titleId="plans-title"
      className="plans"
      // actions={buttons}
    >
      <Grid cols={3}>
        {plansInfo.map((item, index) => (
          <TarifPlanCard {...item} key={index}></TarifPlanCard>
        ))}
      </Grid>
    </Section>
  );
};

export default TarifPlans;
