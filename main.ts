namespace SpriteKind {
    export const BigCookie = SpriteKind.create()
    export const Settingsicon = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    AClickDetect()
    if (Mouse.overlapsWith(BigCookie2)) {
        CookieAmount += CookieWorth
        CookieCounter.setText("" + CookieAmount + " ")
        BigCookie2.changeScale(1, ScaleAnchor.Middle)
        music.play(music.createSoundEffect(WaveShape.Triangle, 300, 200, 255, 0, 65, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        Cashing = textsprite.create("" + CookieWorth)
        Cashing.vy = -50
        Cashing.x += randint(-20, 20)
        Cashing.y += randint(-20, 20)
        Cashing.setFlag(SpriteFlag.GhostThroughWalls, false)
        Cashing.setFlag(SpriteFlag.DestroyOnWall, true)
        timer.background(function () {
            timer.after(50, function () {
                BigCookie2.changeScale(-1, ScaleAnchor.Middle)
            })
        })
    }
})
function Clearsave () {
    blockSettings.clear()
    game.reset()
}
function autosave () {
    blockSettings.writeNumber("CookieAmountSetting", CookieAmount)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Settingsicon, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        BigCookieSkin += 1
        if (BigCookieSkin == 1) {
            animation.runImageAnimation(
            BigCookie2,
            [img`
                . . . . . f f f f f f . . . . . 
                . . . f f e e e e e e f f . . . 
                . . f e e e e e 7 e e e e f . . 
                . f e e e e e e e e e e e e f . 
                . f e e e e 7 e e e e 7 7 e f . 
                f e e e e 7 7 7 e e e 7 7 e e f 
                f e 7 e e 7 7 e e e e 7 e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e 7 e f 
                f e e 7 7 e e e e e e e e e e f 
                f e e 7 e e e e 7 7 e e e e e f 
                . f e e e e e e 7 7 e e e e f . 
                . f e e e 7 e e e e e e 7 7 f . 
                . . f e e e e e e e 7 7 7 f . . 
                . . . f f 7 7 7 7 7 7 f f . . . 
                . . . . . f f f f f f . . . . . 
                `],
            500,
            false
            )
            CookieCounter.setIcon(img`
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . 7 7 e e e e e e 7 7 . . . 
                . . 7 e e e e e 7 e e e e 7 . . 
                . 7 e e e e e e e e e e e e 7 . 
                . 7 e e e e 7 e e e e 7 7 e 7 . 
                7 e e e e 7 7 7 e e e 7 7 e e 7 
                7 e 7 e e 7 7 e e e e 7 e e e 7 
                7 e e e e e e e e e e e e e e 7 
                7 e e e e e e e e e e e e 7 e 7 
                7 e e 7 7 e e e e e e e e e e 7 
                7 e e 7 e e e e 7 7 e e e e e 7 
                . 7 e e e e e e 7 7 e e e e 7 . 
                . 7 e e e 7 e e e e e e e e 7 . 
                . . 7 e e e e e e e e e e 7 . . 
                . . . 7 7 e e e e e e 7 7 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                `)
        } else if (BigCookieSkin == 2) {
            animation.runImageAnimation(
            BigCookie2,
            [img`
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . 7 7 1 1 1 1 1 1 7 7 . . . 
                . . 7 1 1 1 1 1 7 1 1 1 1 7 . . 
                . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
                . 7 1 1 1 1 7 1 1 1 1 7 7 1 7 . 
                7 1 1 1 1 7 7 7 1 1 1 7 7 1 1 7 
                7 1 7 1 1 7 7 1 1 1 1 7 1 1 1 7 
                7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
                7 1 1 1 1 1 1 1 1 1 1 1 1 7 1 7 
                7 1 1 7 7 1 1 1 1 1 1 1 1 1 1 7 
                7 1 1 7 1 1 1 1 7 7 1 1 1 1 1 7 
                . 7 1 1 1 1 1 1 7 7 1 1 1 1 7 . 
                . 7 1 1 1 7 1 1 1 1 1 1 d d 7 . 
                . . 7 1 1 1 1 1 1 1 d d d 7 . . 
                . . . 7 7 d d d d d d 7 7 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                `],
            500,
            false
            )
            CookieCounter.setIcon(img`
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . 7 7 1 1 1 1 1 1 7 7 . . . 
                . . 7 1 1 1 1 1 7 1 1 1 1 7 . . 
                . 7 1 1 1 1 1 1 1 1 1 1 1 1 7 . 
                . 7 1 1 1 1 7 1 1 1 1 7 7 1 7 . 
                7 1 1 1 1 7 7 7 1 1 1 7 7 1 1 7 
                7 1 7 1 1 7 7 1 1 1 1 7 1 1 1 7 
                7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 
                7 1 1 1 1 1 1 1 1 1 1 1 1 7 1 7 
                7 1 1 7 7 1 1 1 1 1 1 1 1 1 1 7 
                7 1 1 7 1 1 1 1 7 7 1 1 1 1 1 7 
                . 7 1 1 1 1 1 1 7 7 1 1 1 1 7 . 
                . 7 1 1 1 7 1 1 1 1 1 1 d d 7 . 
                . . 7 1 1 1 1 1 1 1 d d d 7 . . 
                . . . 7 7 d d d d d d 7 7 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                `)
        } else if (BigCookieSkin == 3) {
            animation.runImageAnimation(
            BigCookie2,
            [img`
                . . . 7 7 7 7 7 7 7 7 7 7 . . . 
                . . 7 8 8 4 8 4 4 8 4 8 8 7 . . 
                . . 7 8 4 4 4 4 4 4 4 4 8 7 . . 
                . . 7 9 8 4 4 9 9 9 4 8 9 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 9 8 4 6 4 4 9 4 8 9 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 9 8 4 6 4 4 9 4 8 9 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 9 8 4 6 6 6 4 4 8 9 7 . . 
                . . 7 8 4 4 4 4 4 4 4 4 8 7 . . 
                . . 7 8 4 4 8 4 4 8 4 4 8 7 . . 
                . . 7 9 8 8 9 8 8 9 8 8 9 7 . . 
                . . . 7 7 7 7 7 7 7 7 7 7 . . . 
                `],
            500,
            false
            )
            CookieCounter.setIcon(img`
                . . . 7 7 7 7 7 7 7 7 7 7 . . . 
                . . 7 8 8 4 8 4 4 8 4 8 8 7 . . 
                . . 7 8 4 4 4 4 4 4 4 4 8 7 . . 
                . . 7 9 8 4 4 9 9 9 4 8 9 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 9 8 4 6 4 4 9 4 8 9 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 9 8 4 6 4 4 9 4 8 9 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 8 4 4 6 4 4 9 4 4 8 7 . . 
                . . 7 9 8 4 6 6 6 4 4 8 9 7 . . 
                . . 7 8 4 4 4 4 4 4 4 4 8 7 . . 
                . . 7 8 4 4 8 4 4 8 4 4 8 7 . . 
                . . 7 9 8 8 9 8 8 9 8 8 9 7 . . 
                . . . 7 7 7 7 7 7 7 7 7 7 . . . 
                `)
        } else if (BigCookieSkin == 4) {
            animation.runImageAnimation(
            BigCookie2,
            [img`
                . . . f f f f f f f f f f . . . 
                . . f 7 7 e 7 e e 7 e 7 7 f . . 
                . . f 7 e e e e e e e e 7 f . . 
                . . f f 7 e e 7 7 7 e 7 f f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f f 7 e 6 e e 7 e 7 f f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f f 7 e 6 e e 7 e 7 f f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f f 7 e 6 6 6 e e 7 f f . . 
                . . f 7 e e e e e e e e 7 f . . 
                . . f 7 e e 7 e e 7 e e 7 f . . 
                . . f f 7 7 f 7 7 f 7 7 f f . . 
                . . . f f f f f f f f f f . . . 
                `],
            500,
            false
            )
            CookieCounter.setIcon(img`
                . . . f f f f f f f f f f . . . 
                . . f 7 7 e 7 e e 7 e 7 7 f . . 
                . . f 7 e e e e e e e e 7 f . . 
                . . f f 7 e e 7 7 7 e 7 f f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f f 7 e 6 e e 7 e 7 f f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f f 7 e 6 e e 7 e 7 f f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f 7 e e 6 e e 7 e e 7 f . . 
                . . f f 7 e 6 6 6 e e 7 f f . . 
                . . f 7 e e e e e e e e 7 f . . 
                . . f 7 e e 7 e e 7 e e 7 f . . 
                . . f f 7 7 f 7 7 f 7 7 f f . . 
                . . . f f f f f f f f f f . . . 
                `)
        } else if (BigCookieSkin == 5) {
            animation.runImageAnimation(
            BigCookie2,
            [img`
                .......77.......
                ......7447......
                .....784647.....
                .....798687.....
                .....784687.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....794487.....
                .....796687.....
                .....787767.....
                .....78e797.....
                ......7897......
                .......77.......
                `],
            500,
            false
            )
            CookieCounter.setIcon(img`
                . . 7 7 . . 
                . 7 4 4 7 . 
                7 8 4 6 4 7 
                7 9 8 6 8 7 
                7 8 4 6 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 4 4 8 7 
                7 9 6 6 8 7 
                7 8 7 7 6 7 
                7 8 e 7 9 7 
                . 7 8 9 7 . 
                . . 7 7 . . 
                `)
            BigCookie2.y += -13
        } else if (BigCookieSkin == 6) {
            animation.runImageAnimation(
            BigCookie2,
            [img`
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . 7 7 4 4 4 4 4 4 7 7 . . . 
                . . 7 4 4 4 4 4 7 4 4 4 4 7 . . 
                . 7 4 4 4 4 4 4 4 4 4 4 4 4 7 . 
                . 7 4 4 4 4 7 4 4 4 4 7 7 4 7 . 
                7 4 4 4 4 7 7 7 4 4 4 7 7 4 4 7 
                7 4 7 4 4 7 7 4 4 4 4 7 4 4 4 7 
                7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
                7 4 4 4 4 4 4 4 4 4 4 4 4 7 4 7 
                7 4 4 7 7 4 4 4 4 4 4 4 4 4 4 7 
                7 4 4 7 4 4 4 4 7 7 4 4 4 4 4 7 
                . 7 4 4 4 4 4 4 7 7 4 4 4 4 7 . 
                . 7 4 4 4 7 4 4 4 4 4 4 9 9 7 . 
                . . 7 4 4 4 4 4 4 4 9 9 9 7 . . 
                . . . 7 7 9 9 9 9 9 9 7 7 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                `],
            500,
            false
            )
            BigCookieSkin = 0
            CookieCounter.setIcon(img`
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . 7 7 4 4 4 4 4 4 7 7 . . . 
                . . 7 4 4 4 4 4 7 4 4 4 4 7 . . 
                . 7 4 4 4 4 4 4 4 4 4 4 4 4 7 . 
                . 7 4 4 4 4 7 4 4 4 4 7 7 4 7 . 
                7 4 4 4 4 7 7 7 4 4 4 7 7 4 4 7 
                7 4 7 4 4 7 7 4 4 4 4 7 4 4 4 7 
                7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
                7 4 4 4 4 4 4 4 4 4 4 4 4 7 4 7 
                7 4 4 7 7 4 4 4 4 4 4 4 4 4 4 7 
                7 4 4 7 4 4 4 4 7 7 4 4 4 4 4 7 
                . 7 4 4 4 4 4 4 7 7 4 4 4 4 7 . 
                . 7 4 4 4 7 4 4 4 4 4 4 9 9 7 . 
                . . 7 4 4 4 4 4 4 4 9 9 9 7 . . 
                . . . 7 7 9 9 9 9 9 9 7 7 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                `)
            BigCookie2.y += 13
        }
        pause(500)
    } else if (controller.B.isPressed()) {
        MouseSkin += 1
        if (MouseSkin == 1) {
            animation.runImageAnimation(
            Mouse,
            [img`
                . . . . 7 7 7 7 7 . . . . 
                . . . 7 1 1 1 1 1 7 7 8 . 
                . . . . 7 7 7 7 1 1 8 7 . 
                . . . . . . . . 7 1 1 7 . 
                . . . . . . . 7 8 7 1 1 7 
                . . . . . . 7 8 7 . 7 1 7 
                . . . . . 7 8 7 . . 7 1 7 
                . . . . 7 8 7 . . . 7 1 7 
                . . . 7 8 7 . . . . 7 1 7 
                . . 7 8 7 . . . . . . 7 . 
                . 7 8 7 . . . . . . . . . 
                7 8 7 . . . . . . . . . . 
                7 7 . . . . . . . . . . . 
                `,img`
                7 7 . . . . . . . . . . . 
                7 8 7 . . . . . . . . . . 
                . 7 8 7 . . . . . . . . . 
                . . 7 8 7 . . . . . . 7 . 
                . . . 7 8 7 . . . . 7 1 7 
                . . . . 7 8 7 . . . 7 1 7 
                . . . . . 7 8 7 . . 7 1 7 
                . . . . . . 7 8 7 . 7 1 7 
                . . . . . . . 7 8 7 1 1 7 
                . . . . . . . . 7 1 1 7 . 
                . . . . 7 7 7 7 1 1 8 7 . 
                . . . 7 1 1 1 1 1 7 7 8 . 
                . . . . 7 7 7 7 7 . . . . 
                `],
            175,
            true
            )
        } else if (MouseSkin == 2) {
            animation.runImageAnimation(
            Mouse,
            [img`
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . 7 7 4 4 4 4 4 4 7 7 . . . 
                . . 7 4 4 4 4 4 7 4 4 4 4 7 . . 
                . 7 4 4 4 4 4 4 4 4 4 4 4 4 7 . 
                . 7 4 4 4 4 7 4 4 4 4 7 7 4 7 . 
                7 4 4 4 4 7 7 7 4 4 4 7 7 4 4 7 
                7 4 7 4 4 7 7 4 4 4 4 7 4 4 4 7 
                7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
                7 4 4 4 4 4 4 4 4 4 4 4 4 7 4 7 
                7 4 4 7 7 4 4 4 4 4 4 4 4 4 4 7 
                7 4 4 7 4 4 4 4 7 7 4 4 4 4 4 7 
                . 7 4 4 4 4 4 4 7 7 4 4 4 4 7 . 
                . 7 4 4 4 7 4 4 4 4 4 4 9 9 7 . 
                . . 7 4 4 4 4 4 4 4 9 9 9 7 . . 
                . . . 7 7 9 9 9 9 9 9 7 7 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                `],
            500,
            false
            )
        } else if (MouseSkin == 3) {
            animation.runImageAnimation(
            Mouse,
            [img`
                f f . . . . . 
                f 1 f . . . . 
                f 1 1 f . . . 
                f 1 1 1 f . . 
                f 1 1 1 1 f . 
                f 1 1 1 1 d f 
                f 1 1 1 f f f 
                f d f 1 1 f . 
                f f f d 1 f . 
                . . . f f . . 
                `],
            500,
            false
            )
        } else if (MouseSkin == 4) {
            animation.runImageAnimation(
            Mouse,
            [img`
                1 1 1 . 1 . . . . 1 1 . . . 1 1 
                1 . 1 . 1 . . . 1 . . 1 . 1 . . 
                1 1 1 . 1 . . . 1 1 1 1 . 1 . . 
                1 . . . 1 1 1 . 1 . . 1 . . 1 1 
                . . . . . . . . . . . . . . . . 
                1 1 1 . 1 . 1 . . 1 1 . . 1 . . 
                1 . . . 1 . 1 . 1 . . 1 . 1 . . 
                1 1 . . 1 1 1 . 1 . . 1 . 1 . . 
                1 . . . 1 . 1 . 1 . . 1 . 1 . . 
                1 1 1 . 1 . 1 . . 1 1 . . 1 1 1 
                . . . . . . . . . . . . . . . . 
                1 1 . . 1 1 1 . 1 1 1 . . . . . 
                1 . 1 . 1 . . . 1 . . 1 . . . . 
                1 . 1 . 1 1 . . 1 . . 1 . . . . 
                1 . 1 . 1 . . . 1 1 1 . . . . . 
                1 1 . . 1 1 1 . 1 . . 1 . . . . 
                `],
            500,
            false
            )
        } else if (MouseSkin == 5) {
            animation.runImageAnimation(
            Mouse,
            [img`
                f . . . . . . . . . . 
                f f . . . . . . . . . 
                f 1 f . . . . . . . . 
                f 1 1 f . . . . . . . 
                f 1 1 1 f . . . . . . 
                f 1 1 1 1 f . . . . . 
                f 1 1 1 1 1 f . . . . 
                f 1 1 1 1 1 1 f . . . 
                f 1 1 1 1 1 1 1 f . . 
                f 1 1 1 1 1 1 1 1 f . 
                f 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 f f f f 
                f 1 1 1 f 1 1 f . . . 
                f 1 1 f . f 1 1 f . . 
                f 1 f . . f 1 1 f . . 
                f f . . . . f 1 1 f . 
                . . . . . . f 1 1 f . 
                . . . . . . . f f . . 
                `],
            500,
            false
            )
            MouseSkin = 0
        }
        pause(500)
    } else if (controller.menu.isPressed()) {
    	
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.B.isPressed()) {
        customBlocks.showSystemMenu()
    }
})
function AClickDetect () {
	
}
function LoadSave () {
    if (blockSettings.exists("CookieAmountSetting")) {
        CookieAmount = blockSettings.readNumber("CookieAmountSetting")
    } else {
        game.showLongText("Hello it looks like your new here so I will teach you the basics", DialogLayout.Bottom)
        game.showLongText("Click the big cookie to get cookies", DialogLayout.Bottom)
        game.showLongText("Which you can use to buy upgrades", DialogLayout.Bottom)
        game.showLongText("We will talk again when you rebirth for the first time", DialogLayout.Bottom)
        game.showLongText("Bye", DialogLayout.Bottom)
    }
}
let MouseSkin = 0
let BigCookieSkin = 0
let Cashing: TextSprite = null
let Mouse: Sprite = null
let CookieAmount = 0
let CookieWorth = 0
let CookieCounter: TextSprite = null
let BigCookie2: Sprite = null
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
LoadSave()
BigCookie2 = sprites.create(img`
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 4 4 4 4 4 4 7 7 . . . 
    . . 7 4 4 4 4 4 7 4 4 4 4 7 . . 
    . 7 4 4 4 4 4 4 4 4 4 4 4 4 7 . 
    . 7 4 4 4 4 7 4 4 4 4 7 7 4 7 . 
    7 4 4 4 4 7 7 7 4 4 4 7 7 4 4 7 
    7 4 7 4 4 7 7 4 4 4 4 7 4 4 4 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 7 4 7 
    7 4 4 7 7 4 4 4 4 4 4 4 4 4 4 7 
    7 4 4 7 4 4 4 4 7 7 4 4 4 4 4 7 
    . 7 4 4 4 4 4 4 7 7 4 4 4 4 7 . 
    . 7 4 4 4 7 4 4 4 4 4 4 9 9 7 . 
    . . 7 4 4 4 4 4 4 4 9 9 9 7 . . 
    . . . 7 7 9 9 9 9 9 9 7 7 . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    `, SpriteKind.BigCookie)
BigCookie2.changeScale(3, ScaleAnchor.Middle)
CookieCounter = textsprite.create("0", 0, 7)
CookieWorth = 1
CookieCounter.setIcon(img`
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 4 4 4 4 4 4 7 7 . . . 
    . . 7 4 4 4 4 4 7 4 4 4 4 7 . . 
    . 7 4 4 4 4 4 4 4 4 4 4 4 4 7 . 
    . 7 4 4 4 4 7 4 4 4 4 7 7 4 7 . 
    7 4 4 4 4 7 7 7 4 4 4 7 7 4 4 7 
    7 4 7 4 4 7 7 4 4 4 4 7 4 4 4 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 7 4 7 
    7 4 4 7 7 4 4 4 4 4 4 4 4 4 4 7 
    7 4 4 7 4 4 4 4 7 7 4 4 4 4 4 7 
    . 7 4 4 4 4 4 4 7 7 4 4 4 4 7 . 
    . 7 4 4 4 7 4 4 4 4 4 4 9 9 7 . 
    . . 7 4 4 4 4 4 4 4 9 9 9 7 . . 
    . . . 7 7 9 9 9 9 9 9 7 7 . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    `)
CookieCounter.setPosition(14, 10)
CookieCounter.setText("" + CookieAmount)
timer.background(function () {
    timer.after(5, function () {
        Mouse = sprites.create(img`
            1 1 1 . 1 . . . . 1 1 . . . 1 1 
            1 . 1 . 1 . . . 1 . . 1 . 1 . . 
            1 1 1 . 1 . . . 1 1 1 1 . 1 . . 
            1 . . . 1 1 1 . 1 . . 1 . . 1 1 
            . . . . . . . . . . . . . . . . 
            1 1 1 . 1 . 1 . . 1 1 . . 1 . . 
            1 . . . 1 . 1 . 1 . . 1 . 1 . . 
            1 1 . . 1 1 1 . 1 . . 1 . 1 . . 
            1 . . . 1 . 1 . 1 . . 1 . 1 . . 
            1 1 1 . 1 . 1 . . 1 1 . . 1 1 1 
            . . . . . . . . . . . . . . . . 
            1 1 . . 1 1 1 . 1 1 1 . . . . . 
            1 . 1 . 1 . . . 1 . . 1 . . . . 
            1 . 1 . 1 1 1 . 1 . . 1 . . . . 
            1 . 1 . 1 . . . 1 1 1 . . . . . 
            1 1 . . 1 1 1 . 1 . . 1 . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(Mouse)
        Mouse.setStayInScreen(true)
        animation.runImageAnimation(
        Mouse,
        [img`
            f . . . . . . . . . . 
            f f . . . . . . . . . 
            f 1 f . . . . . . . . 
            f 1 1 f . . . . . . . 
            f 1 1 1 f . . . . . . 
            f 1 1 1 1 f . . . . . 
            f 1 1 1 1 1 f . . . . 
            f 1 1 1 1 1 1 f . . . 
            f 1 1 1 1 1 1 1 f . . 
            f 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 f f f f 
            f 1 1 1 f 1 1 f . . . 
            f 1 1 f . f 1 1 f . . 
            f 1 f . . f 1 1 f . . 
            f f . . . . f 1 1 f . 
            . . . . . . f 1 1 f . 
            . . . . . . . f f . . 
            `],
        500,
        false
        )
    })
})
tiles.setCurrentTilemap(tilemap`level2`)
let SettingMenu = sprites.create(img`
    . . . . . f f f . . . . . 
    . . f f . f 4 f . f f . . 
    . f 4 4 f f 4 f f 4 4 f . 
    . f 4 4 4 4 4 4 4 4 9 f . 
    . . f 4 4 f f f 4 9 f . . 
    f f f 4 f f . f f 9 f f f 
    f 4 4 4 f . . . f 9 9 9 f 
    f f f 4 f f . f f 9 f f f 
    . . f 4 4 f f f 9 9 f . . 
    . f 4 9 9 9 9 9 9 9 9 f . 
    . f 9 9 f f 9 f f 9 9 f . 
    . . f f . f 9 f . f f . . 
    . . . . . f f f . . . . . 
    `, SpriteKind.Settingsicon)
SettingMenu.setPosition(152, 8)
forever(function () {
    autosave()
})
