import "./Tabs.scss";
import classNames from "classnames";
import TabsNavigation from "@/components/TabsNavigation";

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

const Tabs = (props) => {
  const {
    tabsContent = [],
    idTabButton,
    navigationTargetElementId = null,
    titleId,
    isEnableOnlyOnMobile = false,
    className,
  } = props;

  const isEnableOnlyOnMobileClass = isEnableOnlyOnMobile
    ? "tabs--enable-only-on-mobile"
    : "";

  return (
    <div
      className={classNames("tabs", className, isEnableOnlyOnMobileClass)}
      data-js-tabs={JSON.stringify({ navigationTargetElementId })}
    >
      {!navigationTargetElementId && (
        <TabsNavigation titleId={titleId} buttonsInfo={tabsContent} />
      )}
      <div className="tabs__body">{content(tabsContent, idTabButton)}</div>
    </div>
  );
};

export default Tabs;
