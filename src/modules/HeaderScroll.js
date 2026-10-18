const rootSelector = ".header";
const scrolledClass = "is-scrolled";
const scrollThreshold = 50;

class HeaderScroll {
  constructor() {
    this.headerElement = document.querySelector(rootSelector);

    if (!this.headerElement) {
      return;
    }

    this.update = this.update.bind(this);
    window.addEventListener("scroll", this.update, { passive: true });
    this.update();
  }

  update() {
    this.headerElement.classList.toggle(
      scrolledClass,
      window.scrollY > scrollThreshold,
    );
  }
}

export default HeaderScroll;
