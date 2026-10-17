import TarifPlanCard from "@/components/TarifPlanCard";
import "./TarifPlans.scss";
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import Tabs from "@/components/Tabs";
import TabsNavigation from "@/components/TabsNavigation";

const TarifPlans = () => {
  const title = "Choose the plan that's right for you";
  const description =
    "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!";
  const plansInfo = [
    {
      title: "Monthly",
      isActive: true,
      items: [
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
      ],
    },
    {
      title: "Yearly",
      items: [
        {
          title: "Basic Plan",
          description:
            "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
          price: { value: "90.99", period: "year" },
        },
        {
          title: "Standard Plan",
          description:
            "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
          price: { value: "120.99", period: "year" },
        },
        {
          title: "Premium Plan",
          description:
            "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
          price: { value: "140.99", period: "year" },
        },
      ],
    },
  ];

  const tabsNavigationInfo = plansInfo.map(({ title, isActive = false }) => ({
    title,
    isActive,
  }));

  const tabsNavigationId = "plans-tabs-navigation";

  return (
    <Section
      title={title}
      description={description}
      titleId="plans-title"
      className="plans"
      actions={
        <TabsNavigation
          id={tabsNavigationId}
          idTabButton={tabsNavigationId}
          titleId="plans-tabs"
          buttonsInfo={tabsNavigationInfo}
        ></TabsNavigation>
      }
    >
      <Tabs
        idTabButton={tabsNavigationId}
        navigationTargetElementId={tabsNavigationId}
        titleId="plans-tabs"
        tabsContent={plansInfo.map((planItem) => ({
          title: planItem.title,
          isActive: planItem.isActive,
          children: (
            <Grid cols={3}>
              {planItem.items.map((item, index) => (
                <TarifPlanCard {...item} key={index} />
              ))}
            </Grid>
          ),
        }))}
      />
    </Section>
  );
};

export default TarifPlans;
