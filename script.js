window.addEventListener('load', function(){
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    // console.log(ctx);
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;
});