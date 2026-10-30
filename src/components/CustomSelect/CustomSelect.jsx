import cx from "classnames";

const CustomSelect = ({
  options,
  selectedOption,
  dropdownId,
  labelId,
  className,
}) => {
  return (
    <div className="select__custom">
      <div
        className={cx("select__button", className)}
        tabIndex="0"
        role="combobox"
        aria-expanded="false"
        aria-haspopup="listbox"
        aria-controls={dropdownId}
        aria-labelledby={`${labelId}-label`}
        data-js-select-button
      >
        <span className="select__button-value" data-js-select-button-value>
          <img
            className="select__flag"
            src={selectedOption.imgSrc}
            data-js-select-button-flag
            alt=""
          />
          <span>{selectedOption.value}</span>
        </span>
      </div>
      <div
        className="select__dropdown"
        role="listbox"
        id={dropdownId}
        aria-labelledby={`${labelId}-label`}
        data-js-select-dropdown
      >
        {options.map(({ value, imgSrc, isSelected }, index) => (
          <div
            className={cx("select__option", {
              "is-selected": isSelected,
              "is-current": isSelected,
            })}
            id={`${dropdownId}-option-${index}`}
            role="option"
            aria-selected={Boolean(isSelected)}
            data-value={value}
            data-img-src={imgSrc}
            data-js-select-option
            key={index}
          >
            <img className="select__flag" src={imgSrc} alt="" />
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
