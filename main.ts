let y = 0
let x = 0
input.onButtonPressed(Button.A, function () {
    y += randint(0, 4)
    x = randint(0, 4)
    led.plot(x, y)
    if (x == 4 && y == 4) {
        basic.showString("game over")
    }
})
