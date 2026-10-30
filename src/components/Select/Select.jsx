import "./Select.scss";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import cx from "classnames";

const Select = (props) => {
  const {
    mode, // phone
    label,
    isLabelHidden = true,
    /* Array[{ value, imgSrc, mask, isSelected }] */
    options = [],
    classNames = {},
  } = props;
  const selectedOption =
    options.find(({ isSelected }) => isSelected) ?? options[0];

  const labelId = label
    .trim()
    .toLowerCase()
    .replace(/\s+([a-z0-9])/g, (_, char) => char.toUpperCase());
  const dropdownId = `${labelId}-dropdown`;

  return (
    <div className="select" data-js-select={mode}>
      <label
        htmlFor={labelId}
        id={`${labelId}-label`}
        className={cx("select__label", {
          "visually-hidden": isLabelHidden,
        })}
      >
        {label}
      </label>
      <select
        id={labelId}
        className={cx("select__default-control", classNames.defaultControl)}
        defaultValue={selectedOption?.value}
        tabIndex={-1}
        data-js-select-default-control
      >
        {options.map(({ value }) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      {selectedOption && (
        <CustomSelect
          options={options}
          selectedOption={selectedOption}
          dropdownId={dropdownId}
          labelId={labelId}
          className={classNames.customControl}
        />
      )}
    </div>
  );
};

export default Select;
