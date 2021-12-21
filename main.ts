let 頻道號碼 = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (頻道號碼))
    basic.clearScreen()
    basic.showArrow(ArrowNames.South)
    radio.sendString("LUCKY")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (頻道號碼))
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    while (true) {
        basic.showString(receivedString)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    頻道號碼 = randint(1, 30)
    radio.setGroup(頻道號碼)
    basic.showArrow(ArrowNames.East)
    basic.pause(200)
    basic.showString("" + (頻道號碼))
    basic.clearScreen()
})
