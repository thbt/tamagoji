const emojis = {
  egg: '🥚', // 0..1 yo
  infant: '👶', // 2..5 yo
  kid: '‍👦', // 6..17yo
  adult: '‍👱‍', // 18..59yo
  elderly: '👴', // 60..99yo
  poop: '💩'
};

exports.ageToEmoji = (age) => {
  if (age < 2) return emojis.egg;
  else if (age >= 2 && age < 6) return emojis.infant;
  else if (age >= 6 && age < 18) return emojis.kid;
  else if (age >= 18 && age < 60) return emojis.adult;
  else return emojis.elderly;
}

exports.draw = (state) => {
  // hack: clear console
  process.stdout.write('\x1Bc');

  console.log(`
  STATS: health: ${state.pet.health}/5 - hunger: ${state.pet.hunger}/5 - ${state.pet.sleeping ? 'ASLEEP' : 'AWAKE'} - age: ${state.pet.age}/100
  ╔══════════╗
  ║          ║\t S TO SLEEP
  ║  ${state.clean ? ' ' : emojis.poop} ${this.ageToEmoji(state.pet.age)}     ║\t C TO CLEAN
  ║          ║\t F TO FEED
  ╚══════════╝
  `);
};
