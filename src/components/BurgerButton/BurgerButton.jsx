import "./BurgerButton.scss"
import classNames from "classnames"

const BurgerButton = (props) => {
  const { className, extraAttrs } = props
  const title = "Open menu"

  return (
    <button
      className={classNames(className, "burger-button")}
      type="button"
      aria-label={title}
      title={title}
      {...extraAttrs}
    >
      <span className="burger-button__icon burger-button__icon--burger">
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="burger-button__lines"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM8.25 11.25C8.25 10.8358 8.58579 10.5 9 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H9C8.58579 12 8.25 11.6642 8.25 11.25Z"
          />
        </svg>
      </span>
      <span className="burger-button__icon burger-button__icon--close">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L6.75 5.68934L12.2197 0.219671C12.5126 -0.0732225 12.9874 -0.0732225 13.2803 0.219671C13.5732 0.512564 13.5732 0.987438 13.2803 1.28033L7.81066 6.75L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L6.75 7.81066L1.28033 13.2803C0.987437 13.5732 0.512563 13.5732 0.21967 13.2803C-0.0732232 12.9874 -0.0732232 12.5126 0.21967 12.2197L5.68934 6.75L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z"
          />
        </svg>
      </span>
    </button>
  )
}

export default BurgerButton
