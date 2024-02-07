input.onButtonPressed(Button.A, function () {
    basic.showString("P.E.")
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showString("" + (input.temperature()))
})
