exports.age = (state) => {
  state.pet.age += 1;
  return state;
}

exports.poop = (state) => {
  state.clean = false;
  return state;
}

exports.hunger = (state) => {
  if (state.pet.hunger > 0) {
    state.pet.hunger -= 1;
  } else if (state.pet.hunger == 0 && state.pet.health > 0) {
    state.pet.health -= 1;
  }
  return state;
}

exports.fatigue = (state) => {
  if (state.pet.fatigue > 0) {
    state.pet.fatigue -= 1;
  } else if (state.pet.fatigue == 0 && state.pet.health > 0) {
    state.pet.health -= 1;
  }
  return state;
}

exports.selfSleep = (state) => {
  if (!state.pet.sleeping && state.pet.fatigue == 0) 
    state.pet.sleeping = true;
  return state;
}

exports.wakeUp = (state) => {
  state.pet.fatigue = 5;
  state.pet.sleeping = false;
  return state;
}
