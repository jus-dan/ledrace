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
function initLight () {
    mode = 0
    strip = neopixel.create(DigitalPin.P14, 60, NeoPixelMode.RGB)
    color = neopixel.colors(NeoPixelColors.Purple)
}
input.onButtonPressed(Button.A, function () {
    initLight()
})
input.onPinPressed(TouchPin.P2, function () {
    if (go == 1) {
        strip2.rotate(2)
    }
})
function init () {
    mode = 1
    music.setVolume(31)
    go = 0
    delay = 100
    rounds = 0
    strip = neopixel.create(DigitalPin.P14, 60, NeoPixelMode.RGB)
    strip2 = neopixel.create(DigitalPin.P14, 60, NeoPixelMode.RGB)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip2.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
}
input.onButtonPressed(Button.B, function () {
    color = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
})
input.onPinPressed(TouchPin.P1, function () {
    if (go == 1) {
        strip.rotate(2)
    }
})
let rounds = 0
let strip2: neopixel.Strip = null
let color = 0
let strip: neopixel.Strip = null
let mode = 0
let delay = 0
let go = 0
initLight()
basic.forever(function () {
    if (mode == 0) {
        strip.showColor(color)
        strip.setBrightness(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 255))
        strip.show()
        basic.pause(delay)
    }
})
basic.forever(function () {
    if (mode == 1) {
        strip.show()
        basic.pause(delay)
        strip2.show()
        basic.pause(delay)
    }
})
