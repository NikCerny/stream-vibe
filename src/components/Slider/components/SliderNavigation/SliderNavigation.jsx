import "./SliderNavigation.scss";
import classNames from "classnames";
import Button from "@/components/Button";

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    mode = "", // (default) || 'tile' || circle
    buttonMode = "black-10",
    isNavigationMobileHidden = true,
  } = props;

  const isNavigationMobileHiddenClass = isNavigationMobileHidden
    ? "hidden-mobile"
    : "";

  return (
    <div
      className={classNames(
        className,
        isNavigationMobileHiddenClass,
        "slider-navigation",
        {
          [`slider-navigation--${mode}`]: mode,
        },
      )}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode={buttonMode}
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        dataJsAttrs={{ "data-js-slider-previous-button": "" }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode={buttonMode}
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        dataJsAttrs={{ "data-js-slider-next-button": "" }}
      />
    </div>
  );
};

export default SliderNavigation;
