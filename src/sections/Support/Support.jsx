import Field from "@/components/Field";
import "./Support.scss";
import { Image } from "minista/assets";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import phoneCountries from "@/modules/phoneCountries.js";
import Select from "@/components/Select";

const Support = (props) => {
  const titleId = "support-title";
  const selectOptions = phoneCountries.map(({ dialCode: value, ...country }) => ({
    ...country,
    value,
  }));

  return (
    <section className="support container" aria-labelledby="support-title">
      <div className="support__preview">
        <div className="support__info">
          <h1 className="h2" id={titleId}>
            Welcome to our support page!
          </h1>
          <div className="support__description">
            <p>
              We're here to help you with any problems you may be having with
              our product.
            </p>
          </div>
        </div>
        <Image
          src="/src/assets/images/support-pano.jpg"
          alt=""
          className="support__image"
        ></Image>
      </div>
      <form className="support__form" action="#">
        <Field
          label="First Name"
          isRequired
          placeholder="John"
          className="support__cell"
        ></Field>
        <Field
          label="Last Name"
          placeholder="Wick"
          className="support__cell"
        ></Field>
        <Field
          type="email"
          label="Email"
          isRequired
          placeholder="example@email.com"
          className="support__cell"
        ></Field>
        <Field
          label="Phone Number"
          placeholder="000 000 000"
          className="support__cell"
          inputMode="tel"
          renderBeforeComponent={
            (defaultControlClassName, customControlClassName) => (
              <Select
                mode="phone"
                label="Phone country code"
                options={selectOptions}
                classNames={{
                  defaultControl: defaultControlClassName,
                  customControl: customControlClassName,
                }}
              ></Select>
            )
          }
        ></Field>
        <Field
          label="Message"
          className="support__cell support__cell--wide"
          isTextArea
          isRequired
        ></Field>
        <div className="support__cell support__cell--wide">
          <div className="support__actions">
            <div className="support__agreement">
              <Checkbox
                label="I agree with Terms of Use and Privacy Policy"
                isRequired
              ></Checkbox>
            </div>
            <Button type="submit" label="Send Message"></Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Support;
