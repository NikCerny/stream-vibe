import "./Checkbox.scss";

const Checkbox = (props) => {
  const { isRequired, label } = props;
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        required={isRequired}
      />
      <span className="checkbox__label">
        <span className="field__required--star" aria-hidden>
          *
        </span>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
