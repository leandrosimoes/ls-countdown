import LsCountdown from './classes/LsCountdown'
import LsCountdownOptions from './classes/LsCountdownOptions'
import LsCountdownSufixes from './classes/LsCountdownSufixes'
import LsCountdownTick from './classes/LsCountdownTick'

;((window: any) => {
    window.LsCountdown = LsCountdown
    window.LsCountdownOptions = LsCountdownOptions
    window.LsCountdownSufixes = LsCountdownSufixes
    window.LsCountdownTick = LsCountdownTick
})(typeof window !== typeof undefined ? window : {})

export { LsCountdown, LsCountdownOptions, LsCountdownSufixes, LsCountdownTick }
