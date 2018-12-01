import LsCountdownSufixes from '../classes/LsCountdownSufixes';
import LsCountdownTick from '../classes/LsCountdownTick';
import LsCountdownOptions from '../classes/LsCountdownOptions';
export default class LsCountdown {
    targetDate: Date;
    onStart: Function;
    onStop: Function;
    onTick: Function;
    sufixes: LsCountdownSufixes;
    protected COUNTDOWN_INTERVAL: any;
    protected CURRENT_TIME: LsCountdownTick;
    constructor(options: LsCountdownOptions);
    private validateTargetDate;
    private doTick;
    stop(): void;
    start(): void;
    changeTargetDate(targetDate?: Date): void;
}
