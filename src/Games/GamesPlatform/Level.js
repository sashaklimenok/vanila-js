import { Player } from "./Player";
import { Lava } from "./Lava";
import { Vec } from "./Vec";

const levelChars = {
  '.': 'empty', '#': 'wall', '+': 'lava',
  '@': Player, 'o': 'coin',
  '=': Lava, '|': Lava, 'v': Lava,
}

export class Level {
  constructor(plan) {
    let rows = plan.trim().split('\n').map((char) => [...char]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];
    this.rows = rows.map((row, y) => {
      return char.map((char, x) => {
        const type = levelChars[char];
        if (typeof type === 'string') return type;
        this.startActors.push(type.create(new Vec(x, y), char));
        return 'empty';
      });
    });
  }
}