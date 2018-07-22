#!/usr/bin/env node

const render = require('./render');
const readline = require('readline');
const commands = require('./commands');
const universe = require('./universe');

let state = {
  pet: {
    age: 0,
    health: 5,
    hunger: 5,
    fatigue: 5,
    sleeping: false,
  },
  clean: true
};

// user generated actions
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    switch (key.name) {
    case 'C':
    case 'c':
      commands.clean(state);
      break;
    case 'F':
    case 'f':
      commands.feed(state);
      setTimeout(() => universe.poop(state), 10 * 1000); // 10s
      break;
    case 'S':
    case 's':
      commands.sleep(state);
      setTimeout(() => universe.wakeUp(state), 5 * 1000); // 5s 
      break;
    case 'X':
    case 'x':
      process.exit();
      break;
    default:
      break;
    }
  }
});

function checkGameOver(state) {
  if (state.pet.health == 0) {
    console.log('GAME OVER: your tamagoji died at ' + state.pet.age + ' years old.');
    process.exit();
  } else if (state.pet.age == 100) {
    console.log('YOU WON! your tamagoji made it to 100 years old!');
    process.exit();
  }
}

function gameLoop() {
  checkGameOver(state);
  render.draw(state);
}

// Setup timers
setInterval(gameLoop, 500); // 2 FPS

setInterval(() => universe.age(state), 2 * 60 * 1000); // 2mn
setInterval(() => universe.hunger(state), 10 * 1000); // 10s
setInterval(() => {
  universe.fatigue(state);
  if (state.pet.fatigue == 0)
    setTimeout(() => {
      universe.selfSleep(state);
      setTimeout(() => universe.wakeUp(state), 5 * 1000); // 5s
    }, 25 * 1000); // 25s
}, 10 * 1000); // 10s
