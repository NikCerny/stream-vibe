import IMask from "imask";
import phoneCountries from "./phoneCountries.js";

const rootSelector = "[data-js-phone-input]";
const selectSelector = "[data-js-select-default-control]";
const inputSelector = "[data-js-phone-input-control]";

class InputMask {
  selectors = {
    select: selectSelector,
    input: inputSelector,
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.selectElement = this.rootElement.querySelector(this.selectors.select);
    this.inputElement = this.rootElement.querySelector(this.selectors.input);
    this.mask = null;

    if (!this.selectElement || !this.inputElement) {
      return;
    }

    this.init();
    this.updateMask();
    this.bindEvents();
  }

  init() {
    if (typeof IMask !== "function") {
      console.error("Library IMask failed to connect");
    }
  }

  get selectedCountry() {
    return phoneCountries.find(
      ({ dialCode }) => dialCode === this.selectElement.value,
    );
  }

  updateMask() {
    const selectedCountry = this.selectedCountry;

    if (!selectedCountry) {
      return;
    }

    if (this.mask) {
      this.mask.updateOptions({
        mask: selectedCountry.mask,
      });
      this.mask.value = "";
    } else {
      this.mask = IMask(this.inputElement, {
        mask: selectedCountry.mask,
      });
    }

    this.inputElement.placeholder = selectedCountry.mask;
  }

  onSelectChange = () => {
    this.updateMask();
  };

  bindEvents() {
    this.selectElement.addEventListener("change", this.onSelectChange);
  }
}

class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new InputMask(element);
    });
  }
}

export default InputMaskCollection;
