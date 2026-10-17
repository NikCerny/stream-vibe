import "./Tabs.scss";
import classNames from "classnames";

const Tabs = (props) => {
  const {
    tabsContent = [],
    idTabButton,
    navigationTargetElementId = null,
    titleId
  } = props;

  return (
    <div
      className="tabs"
      data-js-tabs={JSON.stringify({ navigationTargetElementId })}
    >
      {!navigationTargetElementId && (
        <TabsNavigation titleId={titleId} buttonsInfo={tabsContent} />
      )}
      <div className="tabs__body">{content(tabsContent, idTabButton)}</div>
    </div>
  );
};

const content = (arr, idTabButton) => {
  return arr.map(({ children, isActive }, index) => (
    <div
      className={classNames("tabs__content", { "is-active": isActive })}
      id={`${idTabButton}-tabpanel-${index + 1}`}
      aria-labelledby={`${idTabButton}-tab-${index + 1}`}
      tabIndex={0}
      data-js-tabs-content=""
      key={index}
    >
      {children}
    </div>
  ));
};

export default Tabs;
