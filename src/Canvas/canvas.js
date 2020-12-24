export class Painting {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    this.drawTriangle();
    this.drawCircle();
    this.drawDiagram();
    this.ctx.translate(300, 0);
    this.drawTree(60, 0.5, 0.8);
    this.ctx.fillStyle = 'rgba(0, 0, 200, 0.1)';
  }

  drawTriangle() {
    const ctx = this.ctx;
    const x = 70;
    const y = 370;
    const size = 100;
    const angle = 45;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - angle, y + size);
    ctx.lineTo(x - angle + size, y + size);
    ctx.closePath();
    ctx.stroke();
  }

  drawCircle() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(70 * 3, 420, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
  }

  getData() {
    return [
      { state: 'OK', count: 1023, color: 'green' },
      { state: 'normal', count: 700, color: 'blue' },
      { state: 'bad', count: 483, color: 'orange' },
      { state: 'terrible', count: 102, color: 'red' },
    ];
  }

  drawDiagram() {
    const ctx = this.ctx;
    const data = this.getData();
    const totalCount = data.reduce((prev, current) => prev + current.count, 0);
    let currentAngel = -0.5 * Math.PI;
    for (const result of data) {
      const sliceAngel = (result.count / totalCount) * 2 * Math.PI;
      ctx.beginPath();
      ctx.arc(700, 400, 100, currentAngel, currentAngel + sliceAngel);
      currentAngel += sliceAngel;
      ctx.lineTo(700, 400);
      ctx.fillStyle = result.color;
      ctx.fill();
    }
  }

  drawTree(length, angle, scale) {
    const ctx = this.ctx;
    ctx.fillRect(0, 0, 1, length);
    if (length < 8) return;
    ctx.save();
    ctx.translate(0, length);
    ctx.rotate(-angle);
    this.drawTree(length * scale, angle, scale);
    ctx.rotate(2 * angle);
    this.drawTree(length * scale, angle, scale);
    ctx.restore();
  }

  appendToDOM() {
    const root = document.getElementById('root');
    root.appendChild(this.canvas);
  }
}
