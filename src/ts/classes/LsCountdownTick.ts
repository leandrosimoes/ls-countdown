export default class LsCountdownTick {
    years: string
    days: string
    hours: string
    minutes: string
    seconds: string

    constructor({
        years = '0',
        days = '0',
        hours = '0',
        minutes = '0',
        seconds = '0',
    }) {
        this.years = years
        this.days = days
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }
}
