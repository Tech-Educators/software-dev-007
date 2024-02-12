```js
// there are 2 players
// each player has health, attack, defense
// each player can attack the other player
// when they attack, they remove the attack value from the opponents health
// and they themelves lose health equal the oponents defense value

/*
for example
JOE
HP 6
ATT 3
DEF 2

TIM
HP 9
ATT 2
DEF 4

JOE attacks TIM
TIM loses 3 HP
JOE loses 4 HP
*/

class Player {
  constructor(name, hp, att, def) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.def = def
  }

  makeAttack(defender) {
    console.log(`${this.name} attacks ${defender.name}`)
    // remove the oponent health
    defender.hp = defender.hp - this.att;
    // remove our own health
    this.hp = this.hp - defender.def;
  }
}

const tim = new Player("Tim", 6, 2, 4);
const joe = new Player("Joe", 7, 3, 1);

console.log(tim)
console.log(joe)

tim.makeAttack(joe)

console.log(tim)
console.log(joe)

tim.makeAttack(joe)

console.log(tim)
console.log(joe)
```