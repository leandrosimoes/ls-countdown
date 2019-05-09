import "jasmine";
import { LsCountdown, LsCountdownOptions, LsCountdownSufixes, LsCountdownTick } from '../src/ts/index'

describe('All Validations', () => {
    let _currentYear: number;

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;
        _currentYear = new Date().getFullYear()
    })

    it('Must be defined', () => {
        const targetDate: Date = new Date(_currentYear + 1, 1, 1);
        const options = new LsCountdownOptions({ targetDate })
        const countdown = new LsCountdown(options)

        expect(countdown).toBeDefined()
        expect(countdown).not.toBeUndefined()
    })

    it('On start ticking', done => {
        const onStart = (tick: LsCountdownTick) => {
            expect(tick).toBeDefined()
            done()
        }

        const targetDate: Date = new Date(_currentYear + 1, 1, 1);
        const options = new LsCountdownOptions({ targetDate, onStart })
        const countdown = new LsCountdown(options)

        countdown.start()
    })

    it('On tick', done => {
        let times: number = 0
        const onTick = (tick: LsCountdownTick) => {
            if (times === 5) {
                expect(tick).toBeDefined()
                done()
            }

            times++
        }

        const targetDate: Date = new Date(_currentYear + 1, 1, 1);
        const options = new LsCountdownOptions({ targetDate, onTick })
        const countdown = new LsCountdown(options)

        countdown.start()
    })

    it('On stop ticking', done => {
        const onStop = (tick: LsCountdownTick) => {
            expect(tick).toBeDefined()
            done()
        }

        const targetDate: Date = new Date(_currentYear + 1, 1, 1);
        const options = new LsCountdownOptions({ targetDate, onStop })
        const countdown = new LsCountdown(options)

        countdown.start()
        countdown.stop()
    })

    it('Change date', () => {
        const targetDate: Date = new Date(_currentYear + 1, 1, 1);
        const targetDate2: Date = new Date(_currentYear + 2, 1, 1);

        const options = new LsCountdownOptions({ targetDate })
        const countdown = new LsCountdown(options)

        expect(countdown.targetDate === targetDate).toBe(true)
        expect(countdown.targetDate === targetDate2).toBe(false)

        countdown.changeTargetDate(targetDate2)

        expect(countdown.targetDate === targetDate).toBe(false)
        expect(countdown.targetDate === targetDate2).toBe(true)
    })

    it('Intern validations', () => {
        const rightDate: Date = new Date(_currentYear + 1, 1, 1);
        const wrongTargetDate: Date = new Date(_currentYear - 1, 1, 1);

        expect(() => {
            const options = new LsCountdownOptions({ wrongTargetDate })
            const countdown = new LsCountdown(options)
        }).toThrowError('The target date must be a foward date')

        expect(() => {
            const options = new LsCountdownOptions({ rightDate })
            const countdown = new LsCountdown(options)
            countdown.changeTargetDate(wrongTargetDate);
        }).toThrowError('The target date must be a foward date')
    })

    it('Must change sufixes', done => {
        const targetDate: Date = new Date(_currentYear + 1, 1, 1);
        const sufixes = new LsCountdownSufixes({ years: ' years', days: ' days', hours: ' hours', minutes: ' minutes', seconds: ' seconds' })

        const onTick = (tick: LsCountdownTick) => {
            expect(tick.years.indexOf(sufixes.years)).toBeGreaterThan(-1)
            expect(tick.days.indexOf(sufixes.days)).toBeGreaterThan(-1)
            expect(tick.hours.indexOf(sufixes.hours)).toBeGreaterThan(-1)
            expect(tick.minutes.indexOf(sufixes.minutes)).toBeGreaterThan(-1)
            expect(tick.seconds.indexOf(sufixes.seconds)).toBeGreaterThan(-1)
            done()
        }

        const options = new LsCountdownOptions({ targetDate, onStart: undefined, onStop: undefined, onTick, sufixes })
        const countdown = new LsCountdown(options)
        countdown.start()
    })
})