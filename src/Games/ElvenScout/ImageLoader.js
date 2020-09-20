export class ImageLoader {
  constructor(imageFiles){
    this.imagesFiles = imageFiles;
    this.images = {}
  }

  load() {
    const promises = [];
    for (const name in this.imagesFiles) {
      promises.push(this.loadImage(name, this.imagesFiles[name]))
    }
    return Promise.all(promises);
  }

  loadImage(name, src) {
    return new Promise((resolve) => {
      const image = new Image();
      this.images[name] = image;
      image.onload = () => resolve(name);
      image.src = src;
    })
  }

}