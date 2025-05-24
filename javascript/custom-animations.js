class CustomAnimations {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
          } else if (entry.target.dataset.reset === 'true') {
            this.resetElement(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.setupAnimations();
  }

  setupAnimations() {
    this.animateFromTop('.logo', {
      distance: '50px',
      duration: 1500,
      reset: false,
      delay: 0
    });

    this.animateFromBottom('.reveal', {
      distance: '50px',
      duration: 1500,
      delay: 0
    });

    const socialIcons = [
      { selector: '.facebook', delay: 0 },
      { selector: '.instagram', delay: 200 },
      { selector: '.x', delay: 400 },
      { selector: '.youtube', delay: 600 },
      { selector: '.music', delay: 800 },
      { selector: '.email', delay: 1000 }
    ];

    socialIcons.forEach(icon => {
      this.animateFromRight(icon.selector, {
        distance: '400px',
        duration: 1500,
        delay: icon.delay
      });
    });

    this.animateFromLeft('.left', {
      distance: '100px',
      duration: 1500,
      delay: 0
    });

    // Outros elementos
    this.animateFromRight('.kraken', {
      distance: '50px',
      duration: 1500,
      delay: 0
    });

    this.animateFromRight('.tooltip', {
      distance: '50px',
      duration: 1500,
      delay: 0
    });
  }

  animateFromTop(selector, options = {}) {
    this.setupElementAnimation(selector, 'top', options);
  }

  animateFromBottom(selector, options = {}) {
    this.setupElementAnimation(selector, 'bottom', options);
  }

  animateFromLeft(selector, options = {}) {
    this.setupElementAnimation(selector, 'left', options);
  }

  animateFromRight(selector, options = {}) {
    this.setupElementAnimation(selector, 'right', options);
  }

  setupElementAnimation(selector, origin, options) {
    const elements = document.querySelectorAll(selector);
    const {
      distance = '50px',
      duration = 1000,
      delay = 0,
      reset = true,
      easing = 'ease-in-out'
    } = options;

    elements.forEach((element, index) => {

      element.style.opacity = '0';
      element.style.transition = `all ${duration}ms ${easing}`;
      element.style.transitionDelay = `${delay + (index * 100)}ms`;
      
      switch (origin) {
        case 'top':
          element.style.transform = `translateY(-${distance})`;
          break;
        case 'bottom':
          element.style.transform = `translateY(${distance})`;
          break;
        case 'left':
          element.style.transform = `translateX(-${distance})`;
          break;
        case 'right':
          element.style.transform = `translateX(${distance})`;
          break;
      }

      element.dataset.origin = origin;
      element.dataset.distance = distance;
      element.dataset.reset = reset.toString();

      this.observer.observe(element);
    });
  }

  animateElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translate(0, 0)';
    
    if (element.dataset.reset === 'false') {
      this.observer.unobserve(element);
    }
  }

  resetElement(element) {
    const origin = element.dataset.origin;
    const distance = element.dataset.distance;
    
    element.style.opacity = '0';
    
    switch (origin) {
      case 'top':
        element.style.transform = `translateY(-${distance})`;
        break;
      case 'bottom':
        element.style.transform = `translateY(${distance})`;
        break;
      case 'left':
        element.style.transform = `translateX(-${distance})`;
        break;
      case 'right':
        element.style.transform = `translateX(${distance})`;
        break;
    }
  }

  addAnimation(selector, origin, options = {}) {
    this.setupElementAnimation(selector, origin, options);
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CustomAnimations();
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CustomAnimations;
} 