const universe = require('../src/universe');

test('age should increment pet age', () => {
  const state = {pet: {age: 3}};
  universe.age(state);
  expect(state).toMatchObject({pet: {age: 4}});
});

test('poop should make room dirty', () => {
  const state = {clean: true};
  universe.poop(state);
  expect(state).toMatchObject({clean: false});
});

describe('hunger', () => {
  test('should decrement hunger points', () => {
    const state = {pet: {hunger: 5, health: 5}};
    expect(universe.hunger(state)).toMatchObject({pet: {hunger: 4, health: 5}});
  });

  test('should decrement hp when hunger is depleted', () => {
    const state = {pet: {hunger: 0, health: 5}};
    expect(universe.hunger(state)).toMatchObject({pet: {hunger: 0, health: 4}});
  });
});

describe('fatigue', () => {
  test('should decrement fatigue points', () => {
    const state = {pet: {fatigue: 5, health: 5}};
    expect(universe.fatigue(state)).toMatchObject({pet: {fatigue: 4, health: 5}});
  });

  test('should decrement hp when fatigue is depleted', () => {
    const state = {pet: {fatigue: 0, health: 5}};
    expect(universe.fatigue(state)).toMatchObject({pet: {fatigue: 0, health: 4}});
  });
});

describe('selfSleep', () => {
  test('should put to sleep', () => {
    const state = {pet: {sleeping: false, fatigue: 0}};
    expect(universe.selfSleep(state)).toMatchObject({pet: {sleeping: true}});
  });
});

describe('wake up', () => {
  test('should refill fatigue points and set sleeping to false', () => {
    const state = {pet: {fatigue: 0, sleeping: true}};
    expect(universe.wakeUp(state)).toMatchObject({pet: {fatigue: 5, sleeping: false}});
  });
});
