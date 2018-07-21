exports.feed = (state) => {
  return state.pet.state === 'ASLEEP' ?
    state :
    Object.assign({}, state, {
      pet: Object.assign({}, state.pet, {
        famine: 5
      })
    });
}

exports.sleep = (state) => {
  return Object.assign({}, state, {
    pet: Object.assign({}, state.pet, {
      sleepy: false,
      state: 'ASLEEP'
    })
  });
}
