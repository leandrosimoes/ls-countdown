export default class LsCountdownSufixes {
    days: string
    hours: string
    minutes: string
    seconds: string

    constructor({ days = 'd', hours = 'h', minutes = 'm', seconds = 's' }) {
        this.days = days
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }
}