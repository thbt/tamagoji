'use strict';

jest.useFakeTimers();
const Tamagoji = require('../src/tamagoji');

describe('actions', () => {
  describe('feed', () => {
    test('should refill hunger points', () => {
      const pet = new Tamagoji();
      pet._hungerEvent();
      pet._hungerEvent();
      expect(pet.hunger).toBe(3);
      pet.feed();
      expect(pet.hunger).toBe(5);
    });

    test('should poop after 2s', () => {
      const pet = new Tamagoji();
      pet.feed();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(pet._poopEvent, 2 * 1000);
    });

    test('should not work if tamagoji is sleeping', () => {
      const pet = new Tamagoji();
      pet._hungerEvent();
      pet._hungerEvent();
      pet.sleep();
      pet.feed();
      expect(pet.hunger).toBe(3);
    });
  });

  describe('sleep', () => {
    test('should put the tamagoji to sleep', () => {
      const pet = new Tamagoji();
      pet.sleep();
      expect(pet.isSleeping).toBeTruthy();
    });

    test('should wake the tamagoji after 8s', () => {
      const pet = new Tamagoji();
      pet.sleep();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(pet._wakeUpEvent, 8 * 1000);
    });
  });

  describe('clean', () => {
    test('should clean the pet', () => {
      const pet = new Tamagoji();
      pet._poopEvent();
      pet.clean();
      expect(pet.isClean).toBeTruthy();
    });
  });
});

describe('events', () => {
  describe('timers' , () => {
    test('should execute age event every 50s', () => {
      const pet = new Tamagoji();
      expect(setInterval).toBeCalledWith(pet._ageEvent, 50 * 1000);
    });

    test('should execute fatigue event every 4s', () => {
      const pet = new Tamagoji();
      expect(setInterval).toBeCalledWith(pet._fatigueEvent, 4 * 1000);
    });
    test('should execute hunger event every 8s', () => {
      const pet = new Tamagoji();
      expect(setInterval).toBeCalledWith(pet._hungerEvent, 8 * 1000);
    });
  });

  describe('age', () => {
    test('should increment age', () => {
      const pet = new Tamagoji();
      expect(pet.age).toBe(0);
      pet._ageEvent();
      expect(pet.age).toBe(1);
    });
  });

  describe('hunger', () => {
    test('should decrease hunger points', () => {
      const pet = new Tamagoji();
      expect(pet.hunger).toBe(5);
      pet._hungerEvent();
      expect(pet.hunger).toBe(4);
    });

    test('should decrease health points when hunger points are depleted', () => {
      const pet = new Tamagoji();
      pet.hunger = 0;
      expect(pet.health).toBe(5);
      pet._hungerEvent();
      expect(pet.health).toBe(4);
    });
  });

  describe('poop', () => {
    test('should make tamagoji dirty', () => {
      const pet = new Tamagoji();
      pet._poopEvent();
      expect(pet.isClean).toBeFalsy();
    });
  });

  describe('fatigue', () => {
    test('should decrement fatigue points', () => {
      const pet = new Tamagoji();
      expect(pet.fatigue).toBe(5);
      pet._fatigueEvent();
      expect(pet.fatigue).toBe(4);
    });
  
    test('should decrement hp when fatigue is depleted', () => {
      const pet = new Tamagoji();
      pet.fatigue = 0;
      pet._fatigueEvent();
      expect(pet.health).toBe(4);
    });

    test('should not do anything if tamagoji is asleep', () => {
      const pet = new Tamagoji();
      pet.isSleeping = true;
      pet._fatigueEvent();
      pet._fatigueEvent();
      pet._fatigueEvent();
      pet._fatigueEvent();
      pet._fatigueEvent();
      pet._fatigueEvent();
      pet._fatigueEvent();
      pet._fatigueEvent();
      expect(pet.health).toBe(5);
      expect(pet.fatigue).toBe(5);
    });

    test('tamagoji should put himself to sleep after 35s when fatigue points reach 0', () => {
      const pet = new Tamagoji();
      pet.fatigue = 1;
      pet._fatigueEvent();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(pet._selfSleepEvent, 10 * 1000);
    });
  });
  
  describe('selfSleep', () => {
    test('should put to sleep when tamagoji is sleepy', () => {
      const pet = new Tamagoji();
      pet.fatigue = 0;
      expect(pet.isSleeping).toBeFalsy();
      pet._selfSleepEvent();
      expect(pet.isSleeping).toBeTruthy();
    });
  });
  
  describe('wake up', () => {
    test('should refill fatigue points and set isSleeping to false', () => {
      const pet = new Tamagoji();
      pet.fatigue = 0;
      pet.isSleeping = true;
      pet._wakeUpEvent();
      expect(pet.isSleeping).toBeFalsy();
    });
  });
  
});
