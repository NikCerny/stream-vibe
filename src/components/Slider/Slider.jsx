import "swiper/css"
import "./Slider.scss"
import SliderNavigation from "./components/SliderNavigation"
import classNames from "classnames"

const MOBILE_S = 480
const MOBILE = 768
const TABLET = 1024
const LAPTOP = 1441

const defaultSliderParams = {

  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    [MOBILE_S]: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    [MOBILE]: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    [TABLET]: {
      spaceBetween: 20,
      allowTouchMove: false,
    },
    [LAPTOP]: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
}

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
    isBeyondTheViewportOnMobileS,
    hasScrollbar = true,
  } = props

  return (
    <div
      className={classNames("slider", {
        "slider--beyond-the-viewport-on-mobile-s": isBeyondTheViewportOnMobileS,
      })}
      data-js-slider={JSON.stringify({
        sliderParams,
        navigationTargetElementId,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation className="slider__navigation" />
      )}

      {hasScrollbar && (
        <div
          className="slider__scrollbar visible-mobile"
          data-js-slider-scrollbar=""
        />
      )}
    </div>
  )
}

export default Slider
