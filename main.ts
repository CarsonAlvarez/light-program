function Light_functions () {
	
}
function lights_on () {
    if (Abutton == 0) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    } else if (Abutton == 1) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (Abutton == 2) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
    } else if (Abutton == 3) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
    } else if (Abutton == 1) {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    if (Abutton >= 3) {
        Abutton = 0
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
        led.unplot(0, 4)
    } else {
        Abutton += 1
    }
    led.plot(0, Abutton)
    lights_on()
})
input.onButtonPressed(Button.B, function () {
    if (Bbutton >= 3) {
        Bbutton = 0
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.unplot(4, 4)
    } else {
        Bbutton += 1
    }
    led.plot(4, Bbutton)
    Light_functions()
})
let Bbutton = 0
let Abutton = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
led.plot(4, Abutton)
led.plot(0, Bbutton)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
})
