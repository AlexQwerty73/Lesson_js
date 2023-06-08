export class Drawer {
    canvas = null;
    context = null;
    colors = [
        'red', 'green', 'blue', 'orange', 'purple',
        'lavender', 'navy', 'silver', 'darkcyan'
    ];
    canvasWidth = 700;
    canvasHeight = 450;
    constructor() {
        this._initContext();
        this.initCanvas();
    }
    _random(max, min) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    _initContext() {
        const canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
    }
    initCanvas() {
        const logo = document.getElementById('logo');
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(logo, 100, 25, 500, 400);
    }
    _buildAxios(g) {
        g.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        g.fillStyle = 'lightgray';
        g.lineWidth = 2;

        g.beginPath();
        g.moveTo(10, 10);
        g.lineTo(10, this.canvasHeight - 10);
        g.lineTo(this.canvasWidth - 10, this.canvasHeight - 10);
        g.stroke();
    }
    buildRectangles(g, results, names) {
        let N = results.length;
        if (N === 0) {
            alert('Ви не завантажили дані')
        } else {
            this._buildAxios(g);

            let w = (this.canvasWidth - 20) / N - 5;
            let k = Math.max.apply(null, results) / (this.canvasHeight - 20);
            g.font = '10pt Arial';

            let colorArr = [];
            let color = '';
            
            for (let i = 0; i < N; i++) {
                let h = results[i] / k - 5;
                let x = i * (w + 5) + 10;
                let y = this.canvasHeight - 10 - h;

                // щоб кольори не повторювалися
                do {
                    color = this.colors[this._random(this.colors.length, 0)];
                } while (colorArr.includes(color));
                colorArr.push(color);
                g.fillStyle = color;

                g.fillRect(x, y, w, h);
                g.fillText(names[i], x + 2, y - 5);
            }
        }
    }
}