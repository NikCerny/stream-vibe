import "./TarifPlanCard.scss";
import Link from "@/components/Link";

const TarifPlanCard = (props) => {
  const { title, description, price } = props;
  return (
    <div className="plan-card">
      <div className="plan-card__info">
        <h3 className="h4 plan-card__title">{title}</h3>
        <div className="plan-card__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="plan-card__conditions">
        <span className="plan-card__price">${price.value}</span>
        <span className="plan-card__period">/{price.period}</span>
      </div>
      <div className="plan-card__actions">
        <Link
          content="Start Free Trial"
          href="/subscriptions"
          className="button"
          mode="black-08"
        ></Link>
        <Link
          content="Choose Plan"
          href="/subscriptions"
          className="button plan-card__button--hover"
        ></Link>
      </div>
    </div>
  );
};

export default TarifPlanCard;
