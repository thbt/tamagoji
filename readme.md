# Tamagoji

## Intro 

Small command line nodejs app built for the [technical test of Image Intelligence](https://gist.github.com/davidvuong/90f8ac0916dd3e14fad014bc814614ff).

The game was developped with NodeJS, ESLint, and Jest.

## Pet

Your tamagoji has the following characteristics:

* age (0..100)
* health (0..5)
* famine (0..5)
* sleepy (true, false)
* state [AWAKE, ASLEEP]

Its environment has the following characteristic : 

* clean (true, false)

To fulfill its need, a Tamagoji needs :

* To be fed
* To be put to sleep
* To be in a clean room

All of those actions translates to user-generated events.

The system also generates the following events: 

* Every 10 minutes, your Tamagoji will lose 1 famine point (FP)
    * Once your Tamagoji is hungry (FP stat == 0), it will lose 1HP every 3 minutes
    * 1mn after eating, your tamagoji will poop 
* After being awake for 30 minutes, your Tamagoji will become sleepy
    * Once your Tamagoji is sleepy, it will lose 1HP every 3 minutes
    * After 7 minutes of sleepiness, your Tamagoji will fall asleep on its own

The game is over and stops when your tamagoji dies or reach 100 years old.

