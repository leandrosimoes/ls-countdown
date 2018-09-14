import Sufixes from "./Sufixes"

export default class LsCountdownOptions {
    targetDate: Date
    onStart: Function
    onStop: Function
    onTick: Function
    sufixes: Sufixes

    constructor({
        targetDate = new Date(),
        onStart = (() => { }),
        onStop = (() => { }),
        onTick = (() => { }),
        sufixes = new Sufixes({})
    }: any = {}) {

        this.targetDate = targetDate
        this.onStart = onStart
        this.onStop = onStop
        this.onTick = onTick
        this.sufixes = sufixes

    }
}