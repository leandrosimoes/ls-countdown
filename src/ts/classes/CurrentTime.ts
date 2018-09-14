export default class CurrentTime {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;

    constructor({ days = '0', hours = '0', minutes = '0', seconds = '0' }) {
        this.days = parseInt(days).toString();
        this.hours = parseInt(hours).toString();
        this.minutes = parseInt(minutes).toString();
        this.seconds = parseInt(seconds).toString();
    }
}