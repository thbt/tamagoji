exports.feed = (state) => {
  if (!state.pet.sleeping) 
    state.pet.hunger = 5;
  return state;
}

exports.sleep = (state) => {
  state.pet.sleeping = true;
  return state;
}

exports.clean = (state) => {
  state.clean = true;
  return state;
}
