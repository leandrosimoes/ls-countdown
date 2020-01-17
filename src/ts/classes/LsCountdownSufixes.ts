export default class LsCountdownSufixes {
    years: string
    days: string
    hours: string
    minutes: string
    seconds: string

    constructor({
        years = 'y',
        days = 'd',
        hours = 'h',
        minutes = 'm',
        seconds = 's',
    }) {
        this.years = years
        this.days = days
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }
}
