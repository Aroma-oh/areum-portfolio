export class Hill {
  private color: string;
  private speed: number;
  private total: number;
  private stageWidth: number;
  private stageHeight: number;
  private points: { x: number; y: number }[];
  private gap: number;

  constructor(color: string, speed: number, total: number) {
    this.color = color;
    this.speed = speed;
    this.total = total;
    this.stageWidth = 0;
    this.stageHeight = 0;
    this.points = [];
    this.gap = 0;
  }

  public resize(stageWidth: number, stageHeight: number): void {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.points = [];
    this.gap = Math.ceil(this.stageWidth / (this.total - 2));

    for (let i = 0; i < this.total; i++) {
      this.points[i] = {
        x: i * this.gap,
        y: this.getY(),
      };
    }
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    let cur = this.points[0];
    let prev = cur;

    cur.x += this.speed;

    if (cur.x > -this.gap) {
      this.points.unshift({
        x: -(this.gap * 2),
        y: this.getY(),
      });
    } else if (cur.x > this.stageWidth + this.gap) {
      this.points.splice(-1);
    }

    ctx.moveTo(cur.x, cur.y);

    let prevCx = cur.x;
    let prevCy = cur.y;

    for (let i = 1; i < this.points.length; i++) {
      cur = this.points[i];
      cur.x += this.speed;

      const cx = (prev.x + cur.x) / 2;
      const cy = (prev.y + cur.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);

      prev = cur;
      prevCx = cx;
      prevCy = cy;
    }

    ctx.lineTo(prev.x, prev.y);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
  }

  private getY(): number {
    const min = this.stageHeight / 3;
    const max = this.stageHeight - min;
    return min + Math.random() * max;
  }
}
