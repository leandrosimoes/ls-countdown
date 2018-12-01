import LsCountdownSufixes from "./LsCountdownSufixes";
export default class LsCountdownOptions {
    targetDate: Date;
    onStart: Function;
    onStop: Function;
    onTick: Function;
    sufixes: LsCountdownSufixes;
    constructor({ targetDate, onStart, onStop, onTick, sufixes }?: any);
}
