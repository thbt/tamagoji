#!/usr/bin/env node

const render = require('./render');
const readline = require('readline');
const commands = require('./commands');

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
        break;
      case 'S':
      case 's':
        commands.sleep(state);
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

/**
 * Main function - contains the Game loop
 */
function tamagoji() {
  render.draw(state);
  setInterval(tamagoji, 1000); // 1 FPS
}

tamagoji();
