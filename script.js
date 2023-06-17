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
      this.size = 10;
      this.velocityX = 1;
      this.velocityY = 1;

    }
    draw(context) {
      context.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
  }

  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particlesArray = [];
      this.image = document.getElementById('image1');
      this.centerX = this.width * 0.5;
      this.centerY = this.height * 0.5;
      this.x = this.centerX - this.image.width * 0.5;
      this.y = this.centerY - this.image.height * 0.5;
    }
    init() {
      for (let i = 0; i < 100; i++) {
        this.particlesArray.push(new Particle(this));
      }
    }
    draw(context) {
      this.particlesArray.forEach(particle => particle.draw(context));
      context.drawImage(this.image, this.x, this.y);
    }
    update() {
      this.particlesArray.forEach(particle => particle.update());
    }
  }

  const effect = new Effect(canvas.width, canvas.height);
  effect.init();

  function animate() {
    effect.draw(ctx);
    effect.update();
    requestAnimationFrame(animate);
  }
  animate();
 
});
