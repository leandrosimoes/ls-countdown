import LsCountdownSufixes from './LsCountdownSufixes'

export default class LsCountdownOptions {
    targetDate: Date
    onStart: Function
    onStop: Function
    onTick: Function
    sufixes: LsCountdownSufixes

    constructor({
        targetDate = new Date(),
        onStart = () => {},
        onStop = () => {},
        onTick = () => {},
        sufixes = new LsCountdownSufixes({}),
    }: any = {}) {
        this.targetDate = targetDate
        this.onStart = onStart
        this.onStop = onStop
        this.onTick = onTick
        this.sufixes = sufixes
    }
}
