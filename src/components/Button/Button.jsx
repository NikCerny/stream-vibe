import "./Button.scss";

const Button = (props) => {
  const { label, isLabelHidden = false, type = "button" } = props;
  const title = isLabelHidden ? label : undefined;
  return (
    <button className="button" title={title} aria-label={title} type={type}>
      {!isLabelHidden && <span className="button__label">{label}</span>}
    </button>
  );
};

export default Button;
