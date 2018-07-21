#!/usr/bin/env node
const render = require('./render');

const state = {
  pet: {
    age: 0,
    health: 5,
    famine: 5,
    sleepy: false,
    state: 'AWAKE'
  },
  dirtyness: 0
};

function tamagoji() {
  render.draw(state);

  setTimeout(tamagoji, 1000); // 1 FPS
}

tamagoji();
