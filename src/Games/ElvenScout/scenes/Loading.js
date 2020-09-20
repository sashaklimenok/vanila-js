import { Scene } from "../Scene";

export class Loading extends Scene {
  constructor(game) {
    super(game);
    this.loadedAt = 0;
  }

  init() {
    super.init();
    this.loadedAt = 0
  }

  update(time) {
    if (this.loadedAt == 0 && this.game.screen.isImagesLoaded) {
      this.loadedAt = time;
    }
    if (this.loadedAt !== 0 && (time - this.loadedAt > 500)) {
      this.finish(Scene.LOADED);
    }
  }

  render(time) { 
    this.update(time);
    this.game.screen.fill('#000');
    this.game.screen.print('Loading...', 50, 50)
    super.render(time);
  }

}