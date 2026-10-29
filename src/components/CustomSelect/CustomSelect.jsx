const CustomSelect = ({ countries, dropdownId, labelId }) => {
  return (
    <div className="select__custom">
      <div
        className="select__button field__control"
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
            src={countries[0].imgSrc}
            data-js-select-button-flag
            alt=""
          />
          <span>{countries[0].dialCode}</span>
        </span>
      </div>
      <div
        className="select__dropdown"
        role="listbox"
        id={dropdownId}
        aria-labelledby={`${labelId}-label`}
        data-js-select-dropdown
      >
        {countries.map(({ dialCode, imgSrc }, index) => (
          <div
            className={`select__option${index === 0 ? " is-selected is-current" : ""}`}
            id={`${dropdownId}-option-${index}`}
            role="option"
            aria-selected={index === 0}
            data-value={dialCode}
            data-img-src={imgSrc}
            data-js-select-option
            key={dialCode}
          >
            <img className="select__flag" src={imgSrc} alt="" />
            <span>{dialCode}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
