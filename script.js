window.addEventListener('load', function(){
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    // console.log(ctx);
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    class Particle {
        constructor(){
            this.x = 0;
            this.y = 0;
            this.size = 3;
        }

    }

    class Effect {

    }

    function animate() {

    }
    ctx.fillRect(120, 150, 100, 200)
});