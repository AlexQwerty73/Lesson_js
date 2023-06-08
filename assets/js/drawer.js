export class Drawer {
    canvas = null;
    context = null;
    colors = [
        'coral', 'lightgreen', 'lightblue', 'orange', 'purple',
        'lavender', 'navy', 'indigo', 'darkcyan'
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

    buildPies(g, results, name) {
        let N = results.length;
        if (N === 0) {
            alert('Ви не завантажили дані')
        } else {
            let centerX = this.canvasWidth / 2;
            let centerY = this.canvasHeight / 2;
            let radius = 100;

            g.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            g.strokeStyle = this.colors[7];
            g.lineWidth = 2;

            let s = 0;
            for (let x of results) {
                s += x;
            }
            let k = s / (2 * Math.PI);

            let lastAngle = 0;
            for (let i = 0; i < N; i++) {
                let a1 = 0;
                let a2 = 0;
                if (i == 0) {
                    a1 = 0;
                    a2 = results[i] / k;
                } else {
                    a1 = lastAngle;
                    a2 = lastAngle + results[i] / k;
                }
                lastAngle = a2;
                g.fillStyle = this.colors[i];

                g.fillRect(10, (20 * i) + 10, 10, 10);
                g.fillText(name[i], 25, (20 * i) + 20);

                g.beginPath();
                g.moveTo(centerX, centerY);
                g.arc(centerX, centerY, radius, a1, a2);

                g.lineTo(centerX, centerY)
                g.stroke();
                g.fill();
            }
        }
    }
}