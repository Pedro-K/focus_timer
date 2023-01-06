import { 
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
} from "./elements.js"

export default function Controls() {

    function play() {
        buttonPlay.classList.remove('active')
        buttonPause.classList.add('active')
        buttonSet.classList.remove('active')
        buttonStop.classList.add('active')
    }

    function pause() {
        buttonPlay.classList.add('active')
        buttonPause.classList.remove('active')
    }

    function soundOn() {
        buttonSoundOn.classList.remove('active')
        buttonSoundOff.classList.add('active')
    }

    function soundOff() {
        buttonSoundOn.classList.add('active')
        buttonSoundOff.classList.remove('active')
    }

    function getMinutes() {
        let newMinutes = prompt("Quantos minutos")
        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    function reset() {
        buttonPlay.classList.add('active')
        buttonPause.classList.remove('active')
        buttonSet.classList.add('active')
        buttonStop.classList.remove('active')
    }

    return {
        play,
        pause,
        getMinutes,
        soundOn,
        soundOff,
        reset,
    }
}