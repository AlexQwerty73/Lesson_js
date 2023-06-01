export class Drawer {
    canvas = null;
    context = null;
    colors = [
        'red', 'green', 'blue', 'orange', 'lightgray', 'purple',
        'bisque', 'lavender', 'navy', 'silver', 'darkcyan'
    ];
    canvasWidth = 700;
    canvasHeight = 450;
    constructor() {
        this.initContext();
        this.initCanvas();
    }
    initContext() {
        const canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
    }
    initCanvas() {
        const logo = document.getElementById('logo');
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(logo, 100, 25, 500, 400);
    }
    buildAxios(g) {
        g.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        g.fillStyle = this.colors[4];
        g.lineWidth = 2;

        g.beginPath();
        g.moveTo(10, 10);
        g.lineTo(10, this.canvasHeight - 10);
        g.lineTo(this.canvasWidth - 10, this.canvasHeight - 10);
        g.stroke();

        g.fillStyle = this.colors[1];
        g.fillRect(50, this.canvasHeight - 10 - 300, 100, 300);

    }
}