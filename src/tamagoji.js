'use strict';

module.exports = class Tamagoji {
  constructor() {
    this.age = 0;
    this.health = 5;
    this.hunger = 5;
    this.fatigue = 5;
    this.isSleeping = false;
    this.isClean = true;

    this._ageEvent = (function() {
      this.age += 1;
    }).bind(this);

    this._hungerEvent = (function() {
      if (this.hunger > 0) {
        this.hunger -= 1;
      } else if (this.hunger == 0 && this.health > 0) {
        this.health -= 1;
      }
    }).bind(this);

    this._poopEvent = (function() {
      this.isClean = false;
    }).bind(this);

    this._fatigueEvent = (function() {
      if(!this.isSleeping) {
        if (this.fatigue > 0) {
          this.fatigue -= 1;
          if (this.fatigue == 0) {
            setTimeout(this._selfSleepEvent, 10 * 1000); // 35s
          }
        } else if (this.fatigue == 0 && this.health > 0) {
          this.health -= 1;
        }  
      }
    }).bind(this);

    this._selfSleepEvent = (function() {
      if (!this.isSleeping && this.fatigue == 0) {
        this.isSleeping = true;
        setTimeout(this._wakeUpEvent, 8 * 1000);
      }
    }).bind(this);

    this._wakeUpEvent = (function() {
      this.fatigue = 5;
      this.isSleeping = false;
    }).bind(this);

    setInterval(this._ageEvent, 50 * 1000); // 50s
    setInterval(this._hungerEvent, 8 * 1000); // 10s
    setInterval(this._fatigueEvent, 4 * 1000); // 15s
  }

  // commands

  feed() {
    if (!this.isSleeping) {
      this.hunger = 5;
      setTimeout(this._poopEvent, 2 * 1000);
    }
  }

  sleep() {
    this.isSleeping = true;
    setTimeout(this._wakeUpEvent, 8 * 1000);
  }

  clean() {
    this.isClean = true;
  }
};
