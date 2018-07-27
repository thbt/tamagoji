# Tamagoji

## Intro 

Small command line nodejs app built for the [technical test of Image Intelligence](https://gist.github.com/davidvuong/90f8ac0916dd3e14fad014bc814614ff).

The game was developped with NodeJS, ESLint, and Jest. 

The logic of how the tamagoji live is in the Tamagoji class. Interacting with an instance is done through the public methods.

Thanks to NodeJS single threaded event loop, we don't have to worry about concurrency.

Run the tests with `npm test` and start the game with `npm start`.

## Pet

Your tamagoji has the following characteristics:

* age (0..100)
* health (0..5)
* hunger (0..5)
* fatigue (0..5)
* isSleeping (true, false)
* isClean (true, false)


To fulfill its need, a Tamagoji needs :

* To be fed (feed command)
* To be put to sleep (sleep command)
* To be in a clean room (clean command)

All of those actions translates to user-generated events.

The system also generates the following events: 

* Every 8 seconds, your Tamagoji will lose 1 hunger point (hunger event)
    * Once your Tamagoji is hungry (hunger stat == 0), it will lose 1HP instead
    * 2s after eating, your tamagoji will poop (poop event)
* Every 4 seconds, your Tamagoji will lose 1 fatigue point (fatigue event)
    * Once your Tamagoji is sleepy (fatigue state == 0), it will lose 1HP
    * After 20 seconds of sleepiness, your Tamagoji will fall asleep on its own (selfSleep event)
* Once asleep, your tamagoji will sleep for 8s.
* Every 50s, your tamagoji will age

The game is over and stops when your tamagoji dies or reach 100 years old.

