const userActions = require('../src/user-actions');

describe('feed', () => {
  test('should refill famine points', () => {
    const state = {pet: {famine: 3}};
    expect(userActions.feed(state)).toMatchObject({pet: {famine: 5}});
  });
  
  test('should not work if tamagoji is sleeping', () => {
    const state = {pet: {famine: 3, state: 'ASLEEP'}};
    expect(userActions.feed(state)).toMatchObject({pet: {famine: 3}});
  });
})

describe('sleep', () => {
  test('should put the tamagoji to sleep', () => {
    const state = {pet: {state: 'AWAKE', sleepy: true}};
    expect(userActions.sleep(state)).toMatchObject({pet: {state: 'ASLEEP'}});
  });

  test('sleep should remove sleepy state', () => {
    const state = {pet: {sleepy: true}};
    expect(userActions.sleep(state)).toMatchObject({pet: {sleepy: false}});
  });
})

