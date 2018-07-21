# Tamagoji

## Intro 

Small command line nodejs app built for the [technical test of Image Intelligence](https://gist.github.com/davidvuong/90f8ac0916dd3e14fad014bc814614ff).

The game was developped with NodeJS, ESLint, and Jest.

## Pet

Your tamagoji has the following characteristics:

* age (0..100)
* health (0..5)
* famine (0..5)
* sleepy (false, true)
* state [AWAKE, ASLEEP]

To fulfill its need, a Tamagoji needs :

* To be fed (FEED event)
* To be put to sleep (SLEEP event)
* To be in a clean room (CLEAN event)

All of those actions translates to user-generated events.

The system also generates the following events: 

* Every 10 minutes, your Tamagoji will lose 1 famine point (FP)
     * Once your Tamagoji is hungry (FP stat == 0), it will lose 1HP every 3 minutes
* After being awake for 30 minutes, your Tamagoji will become sleepy
     * Once your Tamagoji is sleepy, it will lose 1HP every 3 minutes
     * After 7 minutes of sleepiness, your Tamagoji will fall asleep on its own

