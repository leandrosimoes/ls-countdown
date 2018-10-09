import LsCountdownSufixes from '../classes/LsCountdownSufixes'
import LsCountdownTick from '../classes/LsCountdownTick'
import LsCountdownOptions from '../classes/LsCountdownOptions';

export default class LsCountdown {
    targetDate: Date
    onStart: Function
    onStop: Function
    onTick: Function
    sufixes: LsCountdownSufixes

    protected COUNTDOWN_INTERVAL: any
    protected CURRENT_TIME: LsCountdownTick;

    constructor(options: LsCountdownOptions) {
        this.validateTargetDate(options.targetDate)

        this.targetDate = options.targetDate
        this.onStart = options.onStart
        this.onStop = options.onStop
        this.onTick = options.onTick
        this.sufixes = options.sufixes

        this.CURRENT_TIME = new LsCountdownTick({});
    }

    private validateTargetDate(targetDate: Date): void {
        if (targetDate <= new Date()) throw new Error("The target date must be a foward date")
    }

    private doTick(callback: Function | undefined) {
        let current_date = new Date().getTime()
        let seconds_left = (this.targetDate.getTime() - current_date) / 1000
        let days: any, hours: any, minutes: any, seconds: any

        days = seconds_left / 86400
        seconds_left = seconds_left % 86400

        hours = seconds_left / 3600
        seconds_left = seconds_left % 3600

        minutes = seconds_left / 60
        seconds = seconds_left % 60

        days = parseInt((days > 0 ? (days > 9 ? days : `0${days}`) : '00')).toString() + this.sufixes.days
        hours = parseInt((hours > 0 ? (hours > 9 ? hours : `0${hours}`) : '00')).toString() + this.sufixes.hours
        minutes = parseInt((minutes > 0 ? (minutes > 9 ? minutes : `0${minutes}`) : '00')).toString() + this.sufixes.minutes
        seconds = parseInt((seconds > 0 ? (seconds > 9 ? seconds : `0${seconds}`) : '00')).toString() + this.sufixes.seconds

        this.CURRENT_TIME = new LsCountdownTick({ days, hours, minutes, seconds })

        if (typeof callback === 'function') callback(this.CURRENT_TIME)
    }

    stop(): void {
        if (!!this.COUNTDOWN_INTERVAL) {
            clearInterval(this.COUNTDOWN_INTERVAL)

            if (typeof this.onStop === 'function') this.onStop({ ...this.CURRENT_TIME })
        }
    }

    start(): void {
        this.doTick(this.onStart)

        this.COUNTDOWN_INTERVAL = setInterval(() => {
            this.doTick(this.onTick)
        }, 1000)
    }

    changeTargetDate(targetDate = new Date()): void {
        this.validateTargetDate(targetDate)

        this.stop.bind(this).call()

        this.targetDate = targetDate

        this.start.bind(this).call()
    }
}