import DeviceCard from "@/components/DeviceCard";
import "./Devices.scss";
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";

const Devices = () => {
  const title = "We Provide you streaming experience across various devices.";
  const description =
    "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.";
  const cardItems = [
    {
      title: "Smartphones",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      src: "/devices/1.svg",
    },
    {
      title: "Tablet",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      src: "/devices/2.svg",
    },
    {
      title: "Smart TV",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      src: "/devices/3.svg",
    },
    {
      title: "Laptops",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      src: "/devices/4.svg",
    },
    {
      title: "Gaming Consoles",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      src: "/devices/5.svg",
    },
    {
      title: "VR Headsets",
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
      src: "/devices/6.svg",
    },
  ];
  return (
    <Section
      title={title}
      description={description}
      titleId="devices-title"
      className="devices"
    >
      <Grid cols={3}>
        {cardItems.map((item, index) => (
          <DeviceCard key={index} {...item}></DeviceCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Devices;
