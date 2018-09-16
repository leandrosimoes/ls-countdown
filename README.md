# Ls Countdown

A Simple Javascript Countdown Library.

### How to:

```javascript
let targetDate = new Date(/* MUST BE A FOWARD DATE */)

// Event dispatched right after the countdown starts
let onStart = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// Event dispatched ever 1 second
let onTick = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// Event dispatched right after the countdown stops
let onStop = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

let options = new LsCountdownOptions({ targetDate, onStart, onTick, onStop })
let countdown = new LsCountdown(options)

// starts to countdown
countdown.start();

// changes countdown target date
let newTargetDate = new Date(/* MUST BE A FOWARD DATE */)
countdown.changeTargetDate(newTargetDate)

// stops to countdown
countdown.stop()
```