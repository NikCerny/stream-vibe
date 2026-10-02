class OverlayMenu {
  selectors = {
    root: "[data-js-overlay-menu]",
    dialog: "[data-js-overlay-menu-dialog]",
    burgerButton: "[data-js-overlay-menu-burger-button]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  stateAttributes = {
    isOpen: "open",
  };

  constructor() {
    this.rootElem = document.querySelector(this.selectors.root);
    this.dialogElem = this.rootElem?.querySelector(this.selectors.dialog);
    this.burgerButtonElem = this.rootElem?.querySelector(
      this.selectors.burgerButton,
    );
    this.bindEvents();
  }

  bindEvents() {
    this.burgerButtonElem?.addEventListener("click", this.onBurgerButtonClick);
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElem.classList.toggle(this.stateClasses.isActive);
    this.dialogElem.open = ! this.dialogElem.open
  };
}

export default OverlayMenu;
