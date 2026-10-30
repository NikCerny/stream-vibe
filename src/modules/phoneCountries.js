import czechFlag from "@/assets/images/countries-flags/czechia.svg";
import usFlag from "@/assets/images/countries-flags/united-states.svg";
import ukFlag from "@/assets/images/countries-flags/united-kingdom.svg";
import frenchFlag from "@/assets/images/countries-flags/france.svg";
import indiaFlag from "@/assets/images/countries-flags/india.jpg";

const phoneCountries = [
  {
    dialCode: "+1",
    mask: "(000) 000-0000",
    imgSrc: usFlag,
    isSelected: true,
  },
  {
    dialCode: "+420",
    mask: "000 000 000",
    imgSrc: czechFlag,
  },
  {
    dialCode: "+91",
    mask: "00000 00000",
    imgSrc: indiaFlag,
  },
  {
    dialCode: "+44",
    mask: "0000 000000",
    imgSrc: ukFlag,
  },
  {
    dialCode: "+33",
    mask: "0 00 00 00 00",
    imgSrc: frenchFlag,
  },
];

export default phoneCountries;
