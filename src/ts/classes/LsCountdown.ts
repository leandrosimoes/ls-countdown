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

    private isLeapYear(year:number) {
      return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    private doTick(callback: Function | undefined) {
        let current_date = new Date()
        let current_year = current_date.getFullYear()
        let seconds_left = (this.targetDate.getTime() - current_date.getTime()) / 1000
        let years: any, days: any, hours: any, minutes: any, seconds: any

        years = Math.floor(seconds_left / 31536000)

        for (let i = 1; i <= years; i++) {
            seconds_left -= this.isLeapYear(current_year - i) ? 31622400 : 31536000
        }

        days = Math.floor(seconds_left / 86400)
        seconds_left -= days * 86400

        hours = Math.floor(seconds_left / 3600) % 24
        seconds_left -= hours * 3600

        minutes = Math.floor(seconds_left / 60) % 60
        seconds_left -= minutes * 60

        seconds = Math.floor(seconds_left % 60)

        years = `${(years > 9 ? years : `0${years}`)}${this.sufixes.years}`
        days = `${(days > 9 ? days : `0${days}`)}${this.sufixes.days}`
        hours = `${(hours > 9 ? hours : `0${hours}`)}${this.sufixes.hours}`
        minutes = `${(minutes > 9 ? minutes : `0${minutes}`)}${this.sufixes.minutes}`
        seconds = `${(seconds > 9 ? seconds : `0${seconds}`)}${this.sufixes.seconds}`

        this.CURRENT_TIME = new LsCountdownTick({ years, days, hours, minutes, seconds })

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