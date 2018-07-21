const render = require('../src/render');

test('display egg emoji from age 0 to 1', () => {
  expect(render.ageToEmoji(0)).toBe('🥚');
  expect(render.ageToEmoji(1)).toBe('🥚');
});

test('display baby emoji from age 2 to 5', () => {
  for (let i = 2; i < 6; i++) {
    expect(render.ageToEmoji(i)).toBe('👶');
  }
});

test('display boy emoji from age 6 to 17', () => {
  for (let i = 6; i < 18; i++) {
    expect(render.ageToEmoji(i)).toBe('‍👦');
  }
});

test('display man emoji from age 18 to 59', () => {
  for (let i = 18; i < 60; i++) {
    expect(render.ageToEmoji(i)).toBe('‍👱‍');
  }
});

test('display older man emoji from age 60 to 99', () => {
  for (let i = 60; i < 100; i++) {
    expect(render.ageToEmoji(i)).toBe('👴');
  }
});

test('display skull emoji from age 101+', () => {
  expect(render.ageToEmoji(101)).toBe('☠️');
  expect(render.ageToEmoji(345)).toBe('☠️');
});
