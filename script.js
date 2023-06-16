window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const image1 = this.document.getElementById('image1')

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = 100;
        }
        draw(context) {
            context.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    class Effect {
        constructor(width, height) {
            this.width = width;
            this.width = height;
            this.particlesArray = [];
        }
        init() {
            this.particlesArray.push(new Particle());
            this.particlesArray.push(new Particle());
            this.particlesArray.push(new Particle());
        }
        draw(context) {
            this.particlesArray.forEach(particle => particle.draw(context));
        }

    }

    const effect = new Effect(canvas.width, canvas.height)
    effect.init();
    effect.draw(ctx);

    function animate() {

    }

});