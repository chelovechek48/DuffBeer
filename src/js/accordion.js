class Accordion {
  constructor(accordionDOM) {
    this.accordion = accordionDOM;
    this.accordion.addEventListener('click', (event) => this.onClick(event));

    this.color = this.accordion.style.color;
    this.margin = '10rem';
    this.margin = getComputedStyle(this.accordion).getPropertyValue('--feature-image-height');

    this.animation = null;
    this.durationH = 350;
    this.durationC = 350;

    this.disabled = false;
  }

  onClick(event) {
    event.preventDefault();

    if (!this.disabled) {
      const accordionIsOpen = this.accordion.open;
      if (accordionIsOpen) {
        window.requestAnimationFrame(() => this.closeAccordion());
      } else {
        window.requestAnimationFrame(() => this.openAccordion());
      }

      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, this.durationH);
    }
  }

  closeAccordion() {
    // Start a WAAPI animation
    this.animation = this.accordion.animate({
      marginTop: [`-${this.margin}`, 0],
      paddingBottom: [this.margin, 0],
      color: [this.color, 'transparent'],
    }, {
      duration: this.durationH,
      easing: 'ease',
    });

    this.animation = this.accordion.animate({
      color: ['transparent', this.color],
    }, {
      delay: this.durationH,
      duration: this.durationC,
      easing: 'ease',
    });

    setTimeout(() => {
      this.accordion.open = false;
    }, this.durationH);

    this.accordion.style.marginTop = null;
    this.accordion.style.paddingBottom = null;

    this.animation.onfinish = () => this.onAnimationFinish(false);
  }

  openAccordion() {
    // Start a WAAPI animation
    this.animation = this.accordion.animate({
      marginTop: [0, `-${this.margin}`],
      paddingBottom: [0, this.margin],
      color: [this.color, 'transparent'],
    }, {
      duration: this.durationH,
      easing: 'ease',
    });

    this.animation = this.accordion.animate({
      color: ['transparent', this.color],
    }, {
      delay: this.durationH,
      duration: this.durationC,
      easing: 'ease',
    });

    setTimeout(() => {
      this.accordion.open = true;
    }, this.durationH);

    this.accordion.style.marginTop = `-${this.margin}`;
    this.accordion.style.paddingBottom = this.margin;

    this.animation.onfinish = () => this.onAnimationFinish(true);
  }

  onAnimationFinish(open) {
    this.accordion.open = open;
    this.animation = null;
  }
}

export default Accordion;
