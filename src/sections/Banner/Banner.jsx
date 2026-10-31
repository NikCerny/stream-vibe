import "./Banner.scss";
import withBase from "@/utils/withBase";
import Link from "@/components/Link";

const Banner = (props) => {
  const titleId = "banner-title";
  return (
    <section aria-labelledby={titleId} className="banner container">
      <div className="banner__inner">
        <div className="banner__info">
          <h2 className="banner__title" id={titleId}>
            Start your free trial today!
          </h2>
          <div className="banner__description">
            <p>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
        </div>
        <Link
          content="Start A Free Trial"
          href={withBase("subscriptions")}
          className="button banner__button"
        ></Link>
      </div>
    </section>
  );
};

export default Banner;
