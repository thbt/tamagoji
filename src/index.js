#!/usr/bin/env node

const render = require('./render');
const readline = require('readline');
const Tamagoji = require('./tamagoji');

const pet = new Tamagoji();

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
      pet.clean();
      break;
    case 'F':
    case 'f':
      pet.feed();
      break;
    case 'S':
    case 's':
      pet.sleep();
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

function checkGameOver(pet) {
  if (pet.health == 0) {
    console.log('GAME OVER: your tamagoji died at ' + pet.age + ' years old.');
    process.exit();
  } else if (pet.age == 100) {
    console.log('YOU WON! your tamagoji made it to 100 years old!');
    process.exit();
  }
}

function gameLoop() {
  checkGameOver(pet);
  render.draw(pet);
}

// Setup timers
function tamagoji() {
  setInterval(gameLoop, 30); // 2 FPS
}

tamagoji();
