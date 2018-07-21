#!/usr/bin/env node

const render = require('./render');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    switch (key.name) {
      case 'C':
      case 'c':
        // TODO
        break;
      case 'F':
      case 'f':
        // TODO
        break;
      case 'S':
      case 's':
        // TODO
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

const state = {
  pet: {
    age: 0,
    health: 5,
    famine: 5,
    sleepy: false,
    state: 'AWAKE'
  },
  clean: true
};

/**
 * Main function - contains the Game loop
 */
function tamagoji() {
  render.draw(state);

  setTimeout(tamagoji, 1000); // 1 FPS
}

tamagoji();
