export default class CurrentTime {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;

    constructor({ days = '0', hours = '0', minutes = '0', seconds = '0' }) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}