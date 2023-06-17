window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor(effect) {
      this.effect = effect;
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.height;
      this.size = 100;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particlesArray = [];
      this.image = document.getElementById('image1');
    }
    init() {
      for (let i = 0; i < 10; i++) {
        this.particlesArray.push(new Particle(this));
      }
    }
    draw(context) {
      this.particlesArray.forEach(particle => particle.draw(context));
      context.drawImage(this.image, 0, 0);
    }
  }

  const effect = new Effect(canvas.width, canvas.height);
  effect.init();
  effect.draw(ctx);

  function animate() {

  }
});