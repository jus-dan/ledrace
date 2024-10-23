function initLight () {
    modus = 0
    streifen1 = neopixel.create(DigitalPin.P14, anzahlLeds, NeoPixelMode.RGB)
    farbe = neopixel.colors(NeoPixelColors.Purple)
    delay = 20
}
input.onButtonPressed(Button.A, function () {
    initLight()
})
input.onPinPressed(TouchPin.P2, function () {
    if (modus == 0) {
        farbe = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
    } else {
        if (go == 1) {
            streifen2.rotate(schrittweite)
            punkte2 += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    initRace()
})
input.onPinPressed(TouchPin.P1, function () {
    if (modus == 0) {
    	
    } else {
        if (go == 1) {
            streifen1.rotate(schrittweite)
            punkte1 += 1
        }
    }
})
function initRace () {
    spielrunden = 3
    modus = 1
    go = 0
    delay = 100
    schrittweite = 3
    punkte1 = 0
    punkte2 = 0
    streifen1 = neopixel.create(DigitalPin.P14, anzahlLeds, NeoPixelMode.RGB)
    streifen2 = neopixel.create(DigitalPin.P14, anzahlLeds, NeoPixelMode.RGB)
    streifen1.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    streifen1.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    streifen1.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    streifen2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    streifen2.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    streifen2.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    delay = 10
    go = 1
}
let spielrunden = 0
let punkte1 = 0
let punkte2 = 0
let schrittweite = 0
let streifen2: neopixel.Strip = null
let go = 0
let delay = 0
let farbe = 0
let streifen1: neopixel.Strip = null
let modus = 0
let anzahlLeds = 0
anzahlLeds = 60
music.setVolume(10)
initLight()
basic.forever(function () {
    if (modus == 0) {
        streifen1.showColor(farbe)
        streifen1.setBrightness(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 0, 255))
        streifen1.show()
    }
    basic.pause(delay)
})
basic.forever(function () {
    if (modus == 1) {
        streifen1.show()
        basic.pause(delay)
        streifen2.show()
        if (punkte1 * schrittweite >= spielrunden * anzahlLeds - schrittweite || punkte2 * schrittweite >= spielrunden * anzahlLeds - schrittweite) {
            go = 0
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
            delay = 200
            punkte1 = 0
            punkte2 = 0
        }
    }
    basic.pause(delay)
})
