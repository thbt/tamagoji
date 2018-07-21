#!/usr/bin/env node

const emojis = {
  egg: '🥚', // 0..1 yo
  infant: '👶', // 1..5 yo
  kid: '‍👦', // 6..17yo
  adult: '‍👱‍', // 18..59yo
  elderly: '👴', // 60..99yo
  dead: '☠️', // 100+ yo
};

const state = {
  pet: {
    age: 0,
    health: 5,
    famine: 5,
    sleepy: false,
    state: 'AWAKE'
  }
};

function draw() {
  // hack: clear console
  process.stdout.write('\033c');

  console.log(`
  STATS: health: ${state.pet.health}/5 - famine: ${state.pet.famine}/5 - ${state.pet.state} - age: ${state.pet.age}/100
  ╔══════════╗
  ║          ║\t S TO SLEEP
  ║    ${emojis.egg}     ║\t C TO CLEAN
  ║          ║\t F TO FEED
  ╚══════════╝
  `);
}

function tamagoji() {
  draw();

  setTimeout(tamagoji, 1000); // 1 FPS
}

tamagoji();
