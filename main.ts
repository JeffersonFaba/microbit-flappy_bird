input.onButtonPressed(Button.A, function () {
    if (Bit > 0) {
        led.unplot(0, Bit)
        Bit += -1
        led.plot(0, Bit)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Bit < 4) {
        led.unplot(0, Bit)
        Bit += 1
        led.plot(0, Bit)
    }
})
let janela = 0
let Bit = 0
let Obstaculo = [
0,
0,
0,
0,
0
]
let nivel = 0
Bit = randint(0, 4)
led.plot(0, Bit)
basic.forever(function () {
    janela = randint(0, 4)
    Obstaculo[janela] = 1
    for (let índiceX = 0; índiceX <= 4; índiceX++) {
        for (let índiceY = 0; índiceY <= 4; índiceY++) {
            if (Obstaculo[índiceY] == 0) {
                led.plot(4 - índiceX, índiceY)
            }
        }
        basic.pause(500)
        for (let índiceY = 0; índiceY <= 4; índiceY++) {
            if (Obstaculo[índiceY] == 0) {
                led.unplot(4 - índiceX, índiceY)
            }
        }
        if (índiceX == 4 && Obstaculo[Bit] == 0) {
            game.setScore(nivel)
            game.gameOver()
        } else {
            if (índiceX == 4) {
                Obstaculo[janela] = 0
                janela = randint(0, 4)
                índiceX = -1
                Obstaculo[janela] = 1
                nivel += 1
            }
        }
    }
})
