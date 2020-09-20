import { Screen } from "./Screen";
import { Loading } from './scenes/Loading';
import { Menu } from "./scenes/Menu";
import { Scene } from "./Scene";

export class Game {
  constructor({width = 640, height = 640} = {}) {
    this.screen = new Screen(width, height);
    this.screen.loadImages({
      orc: 'assets/img/orc.png',
      player: 'assets/img/player.png',
      title: 'assets/img/title.jpg',
      titles: 'assets/img/tiles.png'

    })
    this.scenes = {
      loading: new Loading(this),
      menu: new Menu(this),
    }
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  changeScene(status) {
    switch (status) {
      case Scene.LOADED:
        return this.scenes.menu;
    
      default:
        return this.scenes.menu;
    }
  }

  frame(time) {

    if (this.currentScene.status !== Scene.WORKING) {
      this.currentScene = this.changeScene(this.currentScene.status)
      this.currentScene.init();
    }

    this.currentScene.render(time);
    requestAnimationFrame(time => this.frame(time))
  }

  run() {
    requestAnimationFrame(time => this.frame(time))
  }

}
