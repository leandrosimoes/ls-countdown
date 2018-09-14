import Sufixes from './classes/Sufixes'
import CurrentTime from './classes/CurrentTime'
import LsCountdownOptions from './classes/LsCountdownOptions';

export default class LsCountdown {
    targetDate: Date
    onStart: Function
    onStop: Function
    onTick: Function
    sufixes: Sufixes

    protected COUNTDOWN_INTERVAL: any
    protected CURRENT_TIME: CurrentTime;

    constructor(options: LsCountdownOptions) {
        this.validateTargetDate(options.targetDate)

        this.targetDate = options.targetDate
        this.onStart = options.onStart
        this.onStop = options.onStop
        this.onTick = options.onTick
        this.sufixes = options.sufixes

        this.CURRENT_TIME = new CurrentTime({});
    }

    private validateTargetDate(targetDate: Date): void {
        if (!(targetDate instanceof Date)) throw new Error('The target date must be a valid Date object')

        if (targetDate <= new Date()) throw new Error("The target date must be a foward date")
    }

    stop(): void {
        if (!!this.COUNTDOWN_INTERVAL) {
            clearInterval(this.COUNTDOWN_INTERVAL)

            if (typeof this.onStop === 'function') this.onStop({ ...this.CURRENT_TIME })
        }
    }

    start(): void {
        this.COUNTDOWN_INTERVAL = setInterval(() => {
            let current_date = new Date().getTime()
            let seconds_left = (this.targetDate.getTime() - current_date) / 1000
            let days, hours, minutes, seconds

            days = seconds_left / 86400
            seconds_left = seconds_left % 86400

            hours = seconds_left / 3600
            seconds_left = seconds_left % 3600

            minutes = seconds_left / 60
            seconds = seconds_left % 60

            days = (days > 0 ? (days > 9 ? days : `0${days}`) : '00') + this.sufixes.days
            hours = (hours > 0 ? (hours > 9 ? hours : `0${hours}`) : '00') + this.sufixes.hours
            minutes = (minutes > 0 ? (minutes > 9 ? minutes : `0${minutes}`) : '00') + this.sufixes.minutes
            seconds = (seconds > 0 ? (seconds > 9 ? seconds : `0${seconds}`) : '00') + this.sufixes.seconds

            this.CURRENT_TIME = new CurrentTime({ days, hours, minutes, seconds })

            if (typeof this.onTick === 'function') this.onTick({ ...this.CURRENT_TIME })
        }, 1000)

        if (typeof this.onStart === 'function') this.onStart({ ...this.CURRENT_TIME })
    }

    changeTargetDate(targetDate = new Date()): void {
        this.validateTargetDate(targetDate)

        this.stop.bind(this).call()

        this.targetDate = targetDate

        this.start.bind(this).call()
    }
}

((window: any) => {
    window.LsCountdown = LsCountdown;
    window.LsCountdownOptions = LsCountdownOptions;
})(window)