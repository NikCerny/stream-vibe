const rootSelector = "[data-js-select]";

class Select {
  selectors = {
    root: rootSelector,
    button: "[data-js-select-button]",
    buttonFlag: "[data-js-select-button-flag]",
    buttonValue: "[data-js-select-button-value]",
    dropdown: "[data-js-select-dropdown]",
    option: "[data-js-select-option]",
  };

  stateClasses = {
    isExpanded: "is-expanded",
    isSelected: "is-selected",
    isCurrent: "is-current",
    isOnTheLeftSide: "is-left-sided",
    isOnTheRightSide: "is-right-sided",
  };

  initialStates = {
    isExpanded: false,
    currentOptionIndex: null,
  };

  stateAttributes = {
    ariaExpanded: "aria-expanded",
    ariaSelected: "aria-selected",
    ariaActiveDescendant: "aria-activedescendant",
  };

  constructor(rootElem) {
    this.rootElem = rootElem;
    this.buttonElem = this.rootElem.querySelector(this.selectors.button);
    this.buttonFlagElem = this.rootElem.querySelector(this.selectors.buttonFlag);
    this.buttonValueElem = this.rootElem.querySelector(this.selectors.buttonValue);
    this.dropdownElem = this.rootElem.querySelector(this.selectors.dropdown);
    this.selectElem = this.rootElem.querySelector("[data-js-select-control]");

    if (
      !this.buttonElem ||
      !this.buttonFlagElem ||
      !this.buttonValueElem ||
      !this.dropdownElem ||
      !this.selectElem
    ) {
      return;
    }

    this.optionElems = this.dropdownElem.querySelectorAll(
      this.selectors.option,
    );

    this.selectedOptionElem = this.dropdownElem.querySelector(
      `.${this.stateClasses.isSelected}`,
    );
    this.currentOptionIndex = Math.max(
      [...this.optionElems].indexOf(
        this.dropdownElem.querySelector(`.${this.stateClasses.isCurrent}`),
      ),
      0,
    );

    this.bindEvents();
    this.syncFromNativeSelect();
    this.updateButtonUI();
    this.fixDropdownPosition();
  }

  bindEvents() {
    this.buttonElem.addEventListener("click", this.onButtonClick);
    this.dropdownElem.addEventListener("click", this.onDropdownClick);
    this.buttonElem.addEventListener("keydown", this.onKeyDown);
    this.selectElem.addEventListener("change", this.onNativeSelectChange);
    document.addEventListener("click", this.onDocumentClick);

    this.mobileAboveMediaQuery = window.matchMedia("(width > 768.98px)");
    this.updateResponsiveAccessibility();
    this.mobileAboveMediaQuery.addEventListener(
      "change",
      this.updateResponsiveAccessibility,
    );
    window.addEventListener("resize", this.fixDropdownPosition);
  }

  onButtonClick = () => {
    const shouldExpand = !this.isExpanded;
    this.setExpanded(shouldExpand);
    if (shouldExpand) {
      this.updateActiveDescendant();
      this.fixDropdownPosition();
    }
  };

  get isExpanded() {
    return this.dropdownElem.classList.contains(this.stateClasses.isExpanded);
  }

  setExpanded(isExpanded) {
    this.dropdownElem.classList.toggle(this.stateClasses.isExpanded, isExpanded);
    this.buttonElem.classList.toggle(this.stateClasses.isExpanded, isExpanded);
    this.buttonElem.setAttribute(this.stateAttributes.ariaExpanded, isExpanded);
  }

  onDocumentClick = (event) => {
    if (!this.rootElem.contains(event.target)) {
      this.setExpanded(false);
    }
  };

  onDropdownClick = (event) => {
    const optionElem = event.target.closest(this.selectors.option);
    if (!optionElem) return;

    const optionIndex = [...this.optionElems].indexOf(optionElem);
    this.onOptionClick(optionElem, optionIndex);
  };

  onNativeSelectChange = () => {
    this.syncFromNativeSelect();
    this.updateButtonUI();
  };

  syncFromNativeSelect() {
    if (!this.selectElem) return;

    const selectedIndex = [...this.optionElems].findIndex(
      (optionElem) => optionElem.dataset.value === this.selectElem.value,
    );
    if (selectedIndex < 0) return;

    this.optionElems.forEach((optionElem, index) => {
      const isSelected = index === selectedIndex;
      optionElem.classList.toggle(this.stateClasses.isSelected, isSelected);
      optionElem.setAttribute(this.stateAttributes.ariaSelected, isSelected);
    });

    this.selectedOptionElem = this.optionElems[selectedIndex];
    this.setCurrentOption(selectedIndex);
  }

  onOptionClick = (newOptionElem, newOptionIndex) => {
    if (!newOptionElem || newOptionIndex < 0) return;

    this.selectElem.value = newOptionElem.dataset.value;
    this.selectElem.dispatchEvent(new Event("change", { bubbles: true }));
    this.setCurrentOption(newOptionIndex);
    this.updateButtonUI();
    this.setExpanded(false);
    this.buttonElem.focus();
  };

  updateButtonUI() {
    const newSelectedOptionValue = this.selectedOptionElem.textContent.trim();
    this.buttonValueElem.lastElementChild.textContent = newSelectedOptionValue;
    this.buttonFlagElem.src = this.selectedOptionElem.dataset.imgSrc;
  }

  fixDropdownPosition() {
    if (!this.dropdownElem || !this.buttonElem) return;

    const viewportWidth = document.documentElement.clientWidth;
    const dropdownRect = this.dropdownElem.getBoundingClientRect();
    const buttonRect = this.buttonElem.getBoundingClientRect();
    const shouldOpenToLeft = buttonRect.left + dropdownRect.width > viewportWidth;

    this.dropdownElem.classList.toggle(
      this.stateClasses.isOnTheLeftSide,
      !shouldOpenToLeft,
    );

    this.dropdownElem.classList.toggle(
      this.stateClasses.isOnTheRightSide,
      shouldOpenToLeft,
    );
  }

  onKeyDown = (event) => {
    const { code } = event;

    if (code === "Tab") {
      this.setExpanded(false);
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
    if (!this.isExpanded) {
      this.setExpanded(true);
      this.updateActiveDescendant();
      return;
    }
    this.moveCurrentOption(-1);
  };

  onArrowDownKeyDown = () => {
    if (!this.isExpanded) {
      this.setExpanded(true);
      this.updateActiveDescendant();
      return;
    }
    this.moveCurrentOption(1);
  };

  moveCurrentOption = (direction) => {
    const nextIndex =
      (this.currentOptionIndex + direction + this.optionElems.length) %
      this.optionElems.length;
    this.setCurrentOption(nextIndex);
    this.updateActiveDescendant();
  };

  onEnterKeyDown = () => {
    if (!this.isExpanded) {
      this.setExpanded(true);
      this.updateActiveDescendant();
      return;
    }

    const currentOption = this.optionElems[this.currentOptionIndex];
    this.onOptionClick(currentOption, this.currentOptionIndex);
  };

  onEscapeKeyDown = () => {
    this.setExpanded(false);
  };

  updateResponsiveAccessibility = () => {
    const isCustomSelectVisible = this.mobileAboveMediaQuery.matches;

    if (isCustomSelectVisible) {
      this.selectElem.tabIndex = -1;
      this.selectElem.setAttribute("aria-hidden", "true");
      return;
    }

    this.selectElem.removeAttribute("tabindex");
    this.selectElem.removeAttribute("aria-hidden");
  };

  setCurrentOption(index) {
    this.optionElems.forEach((optionElem, optionIndex) => {
      optionElem.classList.toggle(
        this.stateClasses.isCurrent,
        optionIndex === index,
      );
    });
    this.currentOptionIndex = index;
  }

  updateActiveDescendant() {
    this.buttonElem.setAttribute(
      this.stateAttributes.ariaActiveDescendant,
      this.optionElems[this.currentOptionIndex].id,
    );
  }
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
