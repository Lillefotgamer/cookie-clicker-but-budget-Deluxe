controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
game.showLongText("Reseteo", DialogLayout.Bottom)
info.setScore(blockSettings.readNumber("CookieAmountSetting"))
forever(function () {
    blockSettings.writeNumber("CookieAmountSetting", info.score())
})
