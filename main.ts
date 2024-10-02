input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    init()
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    go = 1
    delay = 10
})
input.onButtonPressed(Button.A, function () {
    if (go == 1) {
        strip.rotate(1)
    }
})
function init () {
    go = 0
    delay = 100
    rounds = 0
    strip = neopixel.create(DigitalPin.P14, 79, NeoPixelMode.RGB)
    strip2 = neopixel.create(DigitalPin.P14, 79, NeoPixelMode.RGB)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip2.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
}
input.onButtonPressed(Button.B, function () {
    if (go == 1) {
        strip2.rotate(1)
    }
})
let strip2: neopixel.Strip = null
let rounds = 0
let strip: neopixel.Strip = null
let delay = 0
let go = 0
init()
basic.forever(function () {
    strip.show()
    basic.pause(delay)
    strip2.show()
    basic.pause(delay)
})
