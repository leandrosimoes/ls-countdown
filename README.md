# Ls Countdown

Just a simple countdown.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/83b3046325f84d719f1705ceb6a64254)](https://app.codacy.com/app/leandrosimoes/ls-countdown?utm_source=github.com&utm_medium=referral&utm_content=leandrosimoes/ls-countdown&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/leandrosimoes/ls-countdown.svg?branch=master)](https://travis-ci.org/leandrosimoes/ls-countdown) 
[![npm version](https://badge.fury.io/js/ls-countdown.svg)](https://badge.fury.io/js/ls-countdown) 
[![CircleCI](https://circleci.com/gh/leandrosimoes/ls-countdown.svg?style=svg)](https://circleci.com/gh/leandrosimoes/ls-countdown)

### Instalation

`npm i ls-countdown`

### How to:

```javascript
// Import all stuff
const { LsCountdown, LsCountdownOptions, LsCountdownSufixes } = require('ls-countdown')

// Target date to be the reference for the countdown
const targetDate = new Date(/* MUST BE A FOWARD DATE */)

// Event dispatched right after the countdown starts
const onStart = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// Event dispatched ever 1 second
const onTick = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// Event dispatched right after the countdown stops
const onStop = ({ days, hours, minutes, seconds }) => { /* Do whatever you want... */ }

// You can use the LsCountdownSufixes class to change the sufixes of the tick on return
// This is the defaults: { days: 'd', hours: 'h', minutes: 'm', seconds: 's' }
const sufixes = new LsCountdownSufixes({ days: ' days', hours: ' hours', minutes: ' minutes', seconds: ' seconds' })

// Create a new options class with the parameters
const options = new LsCountdownOptions({ targetDate, onStart, onTick, onStop, sufixes })

// Create a new countdown class
const countdown = new LsCountdown(options)

// starts to countdown
countdown.start();

// changes countdown target date
const newTargetDate = new Date(/* MUST BE A FOWARD DATE */)
countdown.changeTargetDate(newTargetDate)

// stops to countdown
countdown.stop()
```