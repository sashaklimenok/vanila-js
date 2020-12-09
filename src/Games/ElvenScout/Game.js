import { Screen } from './Screen';
import { Loading } from './scenes/Loading';
import { Menu } from './scenes/Menu';
import { Scene } from './Scene';
import { ControlState } from 'src/Games/ElvenScout/ControlState';
import { GameLevel } from 'src/Games/ElvenScout/scenes/GameLevel';

export class Game {
  constructor({ width = 640, height = 640 } = {}) {
    this.screen = new Screen(width, height);
    this.screen.loadImages({
      orc: 'assets/img/orc.png',
      player: 'assets/img/player.png',
      title: 'assets/img/title.jpg',
      titles: 'assets/img/tiles.png',

    });
    this.control = new ControlState()
    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this),
      gameLevel: new GameLevel(this),
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  changeScene(status) {
    switch (status) {
      case Scene.LOADED:
        return this.scenes.menu;
      case Scene.START_GAME:
        return this.scenes.gameLevel;

      default:
        return this.scenes.menu;
    }
  }

  frame(time) {
    if (this.currentScene.status !== Scene.WORKING) {
      this.currentScene = this.changeScene(this.currentScene.status);
      this.currentScene.init();
    }

    this.currentScene.render(time);
    requestAnimationFrame((time) => this.frame(time));
  }

  run() {
    requestAnimationFrame((time) => this.frame(time));
  }
}
