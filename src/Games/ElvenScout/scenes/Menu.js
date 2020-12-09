import { Scene } from "../Scene";

export class Menu extends Scene {
  constructor(game) {
    super(game);
  }

  init() {
    super.init()
  }

  update(time) {
    if (this.game.control.fire) {
      this.finish(Scene.START_GAME);
    }
  }

  render(time) {
    this.game.screen.drawImage(0,0, 'title');
    this.game.screen.print('Press the space!', 250, 500);
    this.update(time);
    super.render(time)
  }

}
