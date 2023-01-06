export default function () {
    const buttonPress = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const background = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

    background.loop = true

    function pressButton() {
        buttonPress.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function backgroundStart() {
        background.play()
    }
    
    function backgroundStop() {
        background.pause()
    }

    return {
        pressButton,
        timeEnd,
        backgroundStart,
        backgroundStop,
    }
}