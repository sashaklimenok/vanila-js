import { ImageLoader } from "./ImageLoader";

export class Screen {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  createCanvas(width, height) {
    const elements = document.getElementsByTagName('canvas');
    const canvas = elements[0] || document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.body.append(canvas);
    return canvas;
  }

  fill(color) {
    this.context.fillStyle = color;
    this.context.fillRect(0,0, this.width, this.height);
  }

  loadImages(images) {
    const loader = new ImageLoader(images);
    loader.load().then(names => {
      this.images = Object.assign(this.images, loader.images);
      this.isImagesLoaded = true;
    })
  }

  print(text, x, y) {
    this.context.fillStyle = '#fff';
    this.context.font = '22px Georgina';
    this.context.fillText(text, x, y);
  }

  drawImage(x, y, imageName) {
    this.context.drawImage(this.images[imageName], x, y);
  }

}