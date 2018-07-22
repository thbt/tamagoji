const userActions = require('../src/commands');

describe('feed', () => {
  test('should refill hunger points', () => {
    const state = {pet: {hunger: 3, sleeping: false}};
    expect(userActions.feed(state)).toMatchObject({pet: {hunger: 5}});
  });
  
  test('should not work if tamagoji is sleeping', () => {
    const state = {pet: {hunger: 3, sleeping: true}};
    expect(userActions.feed(state)).toMatchObject({pet: {hunger: 3}});
  });
});

describe('sleep', () => {
  test('should put the tamagoji to sleep', () => {
    const state = {pet: {sleeping: false}};
    expect(userActions.sleep(state)).toMatchObject({pet: {sleeping: true}});
  });
});

describe('clean', () => {
  test('should clean the room', () => {
    const state = {clean: false};
    userActions.clean(state);
    expect(state).toMatchObject({clean: true});
  });
});

