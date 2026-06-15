let nivel_luz = 0
let limite_luminosidade = 50
basic.forever(function () {
    // Lê o nível de luz (0 a 255)
    nivel_luz = input.lightLevel()
    if (nivel_luz < limite_luminosidade) {
        // Liga o LED conectado ao Pino 0
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Asleep)
    } else {
        // Desliga o LED
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
    }
    basic.pause(100)
})
