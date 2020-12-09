import { Scene } from 'src/Games/ElvenScout/Scene';

export class GameLevel extends Scene{
  constructor(game) {
    super(game);
  }

  init() {
    super.init();
  }

  render(time) {
    this.game.screen.fill('#000');
    super.render(time);
  }

}
