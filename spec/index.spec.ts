import "jasmine";
import { LsCountdown, LsCountdownOptions, LsCountdownSufixes, LsCountdownTick } from '../src/ts/index'

describe('All Validations', () => {
    let _currentYear: number;

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
        _currentYear = new Date().getFullYear()
    })

    it('Must be defined', () => {
        let targetDate: Date = new Date(_currentYear + 1, 1, 1);
        let options = new LsCountdownOptions({ targetDate })
        let countdown = new LsCountdown(options)

        expect(countdown).toBeDefined()
        expect(countdown).not.toBeUndefined()
    })

    it('On start ticking', (done) => {
        let onStart = (tick: LsCountdownTick) => {
            expect(tick).toBeDefined()
            done()
        }

        let targetDate: Date = new Date(_currentYear + 1, 1, 1);
        let options = new LsCountdownOptions({ targetDate, onStart })
        let countdown = new LsCountdown(options)

        countdown.start()
    })

    it('On tick', (done) => {
        let times: number = 0
        let onTick = (tick: LsCountdownTick) => {
            if (times === 5) {
                expect(tick).toBeDefined()
                done()
            }

            times++
        }

        let targetDate: Date = new Date(_currentYear + 1, 1, 1);
        let options = new LsCountdownOptions({ targetDate, onTick })
        let countdown = new LsCountdown(options)

        countdown.start()
    })

    it('On stop ticking', (done) => {
        let onStop = (tick: LsCountdownTick) => {
            expect(tick).toBeDefined()
            done()
        }

        let targetDate: Date = new Date(_currentYear + 1, 1, 1);
        let options = new LsCountdownOptions({ targetDate, onStop })
        let countdown = new LsCountdown(options)

        countdown.start()
        countdown.stop()
    })

    it('Change date', () => {
        let targetDate: Date = new Date(_currentYear + 1, 1, 1);
        let targetDate2: Date = new Date(_currentYear + 2, 1, 1);

        let options = new LsCountdownOptions({ targetDate })
        let countdown = new LsCountdown(options)

        expect(countdown.targetDate === targetDate).toBe(true)
        expect(countdown.targetDate === targetDate2).toBe(false)

        countdown.changeTargetDate(targetDate2)

        expect(countdown.targetDate === targetDate).toBe(false)
        expect(countdown.targetDate === targetDate2).toBe(true)
    })

    it('Intern validations', () => {
        let rightDate: Date = new Date(_currentYear + 1, 1, 1);
        let wrongTargetDate: Date = new Date(_currentYear - 1, 1, 1);

        expect(() => {
            let options = new LsCountdownOptions({ wrongTargetDate })
            let countdown = new LsCountdown(options)
        }).toThrowError('The target date must be a foward date')

        expect(() => {
            let options = new LsCountdownOptions({ rightDate })
            let countdown = new LsCountdown(options)
            countdown.changeTargetDate(wrongTargetDate);
        }).toThrowError('The target date must be a foward date')
    })
})