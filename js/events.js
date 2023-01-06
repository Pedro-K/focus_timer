import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
} from "./elements.js"

export default function Events({
    controls,
    timer,
    sound
}) {
    buttonPlay.addEventListener("click", () => {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    buttonPause.addEventListener("click", () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonSet.addEventListener("click", () => {
        let newMinutes = controls.getMinutes()

        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        sound.pressButton()
    })

    buttonStop.addEventListener("click", () => {
        timer.hold()
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonSoundOn.addEventListener("click", () => {
        sound.backgroundStart()
        controls.soundOn()
    })

    buttonSoundOff.addEventListener("click", () => {
        sound.backgroundStop()
        controls.soundOff()
    })

    return {
        buttonPlay,
        buttonPause,
        buttonSet,
        buttonStop,
        buttonSoundOn,
        buttonSoundOff,
    }
}