import classNames from "classnames";
import "./Field.scss";
import Select from "@/components/Select";

const Field = (props) => {
  const {
    className,
    label,
    isRequired,
    isTextArea,
    type = "text", // || email
    placeholder,
    inputMode,
  } = props;
  const labelId = label
    .trim()
    .toLowerCase()
    .replace(/\s+([a-z0-9])/g, (_, char) => char.toUpperCase());

  let inputBlock = "";

  if (inputMode === "tel") {
    inputBlock = (
      <div className="field__body" data-js-phone-input>
        <Select mode="phone" label="Phone country code"></Select>
        <input
          type={type}
          id={labelId}
          className="field__control"
          required={isRequired}
          placeholder={placeholder}
          inputMode={inputMode}
          data-js-phone-input-control
        />
      </div>
    );
  } else {
    inputBlock = (
      <input
        type={type}
        id={labelId}
        className="field__control"
        required={isRequired}
        placeholder={placeholder}
        inputMode={inputMode}
      />
    );
  }

  return (
    <div className={classNames(className, "field")}>
      <label htmlFor={labelId} className="field__label">
        {label}
        {isRequired && (
          <span className="field__required--star" aria-hidden>
            *
          </span>
        )}
      </label>
      {isTextArea ? (
        <textarea
          id={labelId}
          required={isRequired}
          className="field__control field__control--textarea"
          placeholder={placeholder}
        ></textarea>
      ) : inputBlock}
    </div>
  );
};

export default Field;
