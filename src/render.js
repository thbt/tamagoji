const emojis = {
  egg: '🥚', // 0..1 yo
  infant: '👶', // 1..5 yo
  kid: '‍👦', // 6..17yo
  adult: '‍👱‍', // 18..59yo
  elderly: '👴', // 60..99yo
  dead: '☠️', // 100+ yo
  poop: '💩'
};

exports.draw = function (state) {
  // hack: clear console
  process.stdout.write('\033c');

  console.log(`
  STATS: health: ${state.pet.health}/5 - famine: ${state.pet.famine}/5 - ${state.pet.state} - age: ${state.pet.age}/100
  ╔══════════╗
  ║        ${state.dirtyness > 2 ? emojis.poop : ' '} ║\t S TO SLEEP
  ║   ${state.dirtyness > 0 ? emojis.poop : ' '}${emojis.egg}     ║\t C TO CLEAN
  ║  ${state.dirtyness > 1 ? emojis.poop : ' '}       ║\t F TO FEED
  ╚══════════╝
  `);
}
