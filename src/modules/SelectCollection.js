import BaseComponent from "@/modules/generic/BaseComponent";

const rootSelector = "[data-js-select]";

class Select extends BaseComponent {
  selectors = {
    root: rootSelector,
    button: "[data-js-select-button]",
    buttonFlag: "[data-js-select-button-flag]",
    buttonValue: "[data-js-select-button-value]",
    dropdown: "[data-js-select-dropdown]",
    option: "[data-js-select-option]",
    defaultControl: "[data-js-select-default-control]",
  };

  stateClasses = {
    isExpanded: "is-expanded",
    isSelected: "is-selected",
    isCurrent: "is-current",
    isOnTheLeftSide: "is-left-sided",
    isOnTheRightSide: "is-right-sided",
  };

  initialState = {
    isExpanded: false,
    currentOptionIndex: null,
    selectedOptionElement: null,
  };

  stateAttributes = {
    ariaExpanded: "aria-expanded",
    ariaSelected: "aria-selected",
    ariaActiveDescendant: "aria-activedescendant",
  };

  constructor(rootElement) {
    super();

    this.rootElement = rootElement;
    this.buttonElement = this.rootElement.querySelector(this.selectors.button);
    this.buttonFlagElement = this.rootElement.querySelector(
      this.selectors.buttonFlag,
    );
    this.buttonValueElement = this.rootElement.querySelector(
      this.selectors.buttonValue,
    );
    this.dropdownElement = this.rootElement.querySelector(
      this.selectors.dropdown,
    );
    this.originalControlElement = this.rootElement.querySelector(
      this.selectors.defaultControl,
    );

    if (
      !this.buttonElement ||
      !this.buttonFlagElement ||
      !this.buttonValueElement ||
      !this.dropdownElement ||
      !this.originalControlElement
    ) {
      return;
    }

    this.optionElements = this.dropdownElement.querySelectorAll(
      this.selectors.option,
    );

    if (this.optionElements.length === 0) {
      return;
    }

    const selectedOptionIndex = Math.max(
      this.originalControlElement.selectedIndex,
      0,
    );

    this.state = this.getProxyState({
      ...this.initialState,
      currentOptionIndex: selectedOptionIndex,
      selectedOptionElement: this.optionElements[selectedOptionIndex],
    });

    this.bindEvents();
    this.updateUI();
    this.fixDropdownPosition();
  }

  bindEvents() {
    this.buttonElement.addEventListener("click", this.onButtonClick);
    this.dropdownElement.addEventListener("click", this.onDropdownClick);
    this.buttonElement.addEventListener("keydown", this.onKeyDown);
    this.originalControlElement.addEventListener(
      "change",
      this.onOriginalControlChange,
    );
    document.addEventListener("click", this.onDocumentClick);

    this.mobileAboveMediaQuery = window.matchMedia("(width > 768.98px)");
    this.updateResponsiveAccessibility();
    this.mobileAboveMediaQuery.addEventListener(
      "change",
      this.updateResponsiveAccessibility,
    );
    window.addEventListener("resize", this.fixDropdownPosition);
  }

  updateUI() {
    const { isExpanded, currentOptionIndex, selectedOptionElement } =
      this.state;

    if (!selectedOptionElement) {
      return;
    }

    const selectedOptionValue =
      selectedOptionElement.dataset.value ??
      selectedOptionElement.textContent.trim();
    const currentOptionElement = this.optionElements[currentOptionIndex];

    const updateOriginalControl = () => {
      this.originalControlElement.value = selectedOptionValue;
    };

    const updateButton = () => {
      this.buttonValueElement.lastElementChild.textContent =
        selectedOptionValue;
      this.buttonFlagElement.src = selectedOptionElement.dataset.imgSrc;
      this.buttonElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded,
      );
      this.buttonElement.setAttribute(
        this.stateAttributes.ariaExpanded,
        isExpanded,
      );

      if (currentOptionElement) {
        this.buttonElement.setAttribute(
          this.stateAttributes.ariaActiveDescendant,
          currentOptionElement.id,
        );
      }
    };

    const updateDropdown = () => {
      this.dropdownElement.classList.toggle(
        this.stateClasses.isExpanded,
        isExpanded,
      );
    };

    const updateOptions = () => {
      this.optionElements.forEach((optionElement, index) => {
        const isCurrent = currentOptionIndex === index;
        const isSelected = selectedOptionElement === optionElement;

        optionElement.classList.toggle(this.stateClasses.isCurrent, isCurrent);
        optionElement.classList.toggle(
          this.stateClasses.isSelected,
          isSelected,
        );
        optionElement.setAttribute(
          this.stateAttributes.ariaSelected,
          isSelected,
        );
      });
    };

    updateOriginalControl();
    updateButton();
    updateDropdown();
    updateOptions();
  }

  onButtonClick = () => {
    this.state.isExpanded = !this.state.isExpanded;

    if (this.state.isExpanded) {
      this.fixDropdownPosition();
    }
  };

  onDocumentClick = (event) => {
    if (!this.rootElement.contains(event.target)) {
      this.state.isExpanded = false;
    }
  };

  onDropdownClick = (event) => {
    const optionElement = event.target.closest(this.selectors.option);
    if (!optionElement) return;

    const optionIndex = [...this.optionElements].indexOf(optionElement);
    this.onOptionClick(optionElement, optionIndex);
  };

  onOriginalControlChange = () => {
    const selectedOptionIndex = this.originalControlElement.selectedIndex;
    const selectedOptionElement = this.optionElements[selectedOptionIndex];

    if (!selectedOptionElement) return;

    this.state.selectedOptionElement = selectedOptionElement;
    this.state.currentOptionIndex = selectedOptionIndex;
  };

  onOptionClick = (optionElement, optionIndex) => {
    if (!optionElement || optionIndex < 0) return;

    this.state.selectedOptionElement = optionElement;
    this.state.currentOptionIndex = optionIndex;
    this.state.isExpanded = false;
    this.originalControlElement.dispatchEvent(
      new Event("change", { bubbles: true }),
    );
    this.buttonElement.focus();
  };

  fixDropdownPosition = () => {
    const viewportWidth = document.documentElement.clientWidth;
    const dropdownRect = this.dropdownElement.getBoundingClientRect();
    const buttonRect = this.buttonElement.getBoundingClientRect();
    const shouldOpenToLeft =
      buttonRect.left + dropdownRect.width > viewportWidth;

    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheLeftSide,
      !shouldOpenToLeft,
    );
    this.dropdownElement.classList.toggle(
      this.stateClasses.isOnTheRightSide,
      shouldOpenToLeft,
    );
  };

  onKeyDown = (event) => {
    const { code } = event;

    if (code === "Tab") {
      this.state.isExpanded = false;
      return;
    }

    const action = {
      ArrowUp: this.onArrowUpKeyDown,
      ArrowDown: this.onArrowDownKeyDown,
      Space: this.onEnterKeyDown,
      Enter: this.onEnterKeyDown,
      Escape: this.onEscapeKeyDown,
    }[code];

    if (action) {
      event.preventDefault();
      action();
    }
  };

  onArrowUpKeyDown = () => {
    if (!this.state.isExpanded) {
      this.state.isExpanded = true;
      this.fixDropdownPosition();
      return;
    }

    this.moveCurrentOption(-1);
  };

  onArrowDownKeyDown = () => {
    if (!this.state.isExpanded) {
      this.state.isExpanded = true;
      this.fixDropdownPosition();
      return;
    }

    this.moveCurrentOption(1);
  };

  moveCurrentOption = (direction) => {
    const nextOptionIndex =
      (this.state.currentOptionIndex + direction + this.optionElements.length) %
      this.optionElements.length;

    this.state.currentOptionIndex = nextOptionIndex;
  };

  onEnterKeyDown = () => {
    if (!this.state.isExpanded) {
      this.state.isExpanded = true;
      this.fixDropdownPosition();
      return;
    }

    const currentOptionElement =
      this.optionElements[this.state.currentOptionIndex];
    this.onOptionClick(currentOptionElement, this.state.currentOptionIndex);
  };

  onEscapeKeyDown = () => {
    this.state.isExpanded = false;
  };

  updateResponsiveAccessibility = () => {
    const isCustomSelectVisible = this.mobileAboveMediaQuery.matches;

    if (isCustomSelectVisible) {
      this.originalControlElement.tabIndex = -1;
      this.originalControlElement.setAttribute("aria-hidden", "true");
      return;
    }

    this.originalControlElement.removeAttribute("tabindex");
    this.originalControlElement.removeAttribute("aria-hidden");
  };
}

class SelectCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Select(element);
    });
  }
}

export default SelectCollection;
