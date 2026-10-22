import classNames from "classnames";
import "./TabsNavigation.scss";

const TabsNavigation = (props) => {
  const { buttonsInfo = [], titleId, idTabButton, id, className } = props;

  return (
    <div
      className={classNames("tabs-navigation", className)}
      role="tablist"
      data-js-tabs-navigation=""
      aria-labelledby={titleId}
      id={id}
    >
      <h3 className="visually-hidden" id={titleId}>
        {titleId.replaceAll("-", " ")}
      </h3>
      {buttonsInfo.map((item, index) => (
        <div
          key={index}
          className={classNames("tabs-navigation__button", {
            "is-active": item.isActive,
          })}
          id={`${idTabButton}-tab-${index + 1}`}
          role="tab"
          aria-controls={`${idTabButton}-tabpanel-${index + 1}`}
          aria-selected={!!item.isActive}
          tabIndex={item.isActive ? 0 : -1}
          data-js-tabs-button=""
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default TabsNavigation;
