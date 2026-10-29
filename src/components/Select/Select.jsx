import "./Select.scss";
import phoneCountries from "@/modules/phoneCountries.js";
import CustomSelect from "@/components/CustomSelect/CustomSelect";

const Select = (props) => {
  const {
    mode, // phone
    label,
  } = props;

  const labelId = label
    .trim()
    .toLowerCase()
    .replace(/\s+([a-z0-9])/g, (_, char) => char.toUpperCase());
  const dropdownId = `${labelId}-dropdown`;

  const extraJSAttrs = {};

  extraJSAttrs["data-js-select"] = mode;

  return (
    <div className="select" {...extraJSAttrs}>
      <label
        htmlFor={labelId}
        id={`${labelId}-label`}
        className="select__label visually-hidden"
      >
        {label}
      </label>
      <select
        id={labelId}
        className="select__default-control field__control field__control--select"
        data-js-select-control
      >
          {phoneCountries.map(({ dialCode }, index) => (
          <option value={dialCode} key={index}>
            {dialCode}
          </option>
        ))}
      </select>
      <CustomSelect
        countries={phoneCountries}
        dropdownId={dropdownId}
        labelId={labelId}
      />
    </div>
  );
};

export default Select;
