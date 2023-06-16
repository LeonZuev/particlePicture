window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const image1 = this.document.getElementById('image1')

    class Particle {
        constructor() {
            this.x = 200;
            this.y = 50;
            this.size = 100;
        }
        draw() {
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }

    class Effect {

    }
    const particle1 = new Particle();
    particle1.draw();

    function animate() {

    }

});