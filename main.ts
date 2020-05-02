input.onButtonPressed(Button.A, function () {
    if (DirX == 1 && DirY == 0) {
        DirX = 0
        DirY = -1
    } else if (DirX == 0 && DirY == 1) {
        DirX = 1
        DirY = 0
    } else if (DirX == -1 && DirY == 0) {
        DirX = 0
        DirY = 1
    } else if (DirX == 0 && DirY == -1) {
        DirX = -1
        DirY = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (DirX == 1 && DirY == 0) {
        DirX = 0
        DirY = 1
    } else if (DirX == 0 && DirY == 1) {
        DirX = -1
        DirY = 0
    } else if (DirX == -1 && DirY == 0) {
        DirX = 0
        DirY = -1
    } else if (DirX == 0 && DirY == -1) {
        DirX = 1
        DirY = 0
    }
})
let DirY = 0
let DirX = 0
let wynik = 0
let Głowa = game.createSprite(2, 0)
DirX = 1
DirY = 0
let Owoc = game.createSprite(Math.randomRange(0, 4), Math.randomRange(0, 4))
Owoc.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    if (Głowa.get(LedSpriteProperty.X) == 4 && DirX == 1) {
        game.gameOver()
        game.setScore(wynik)
    } else if (Głowa.get(LedSpriteProperty.X) == 0 && DirX == -1) {
        game.gameOver()
        game.setScore(wynik)
    } else if (Głowa.get(LedSpriteProperty.Y) == 0 && DirY == -1) {
        game.gameOver()
        game.setScore(wynik)
    } else if (Głowa.get(LedSpriteProperty.Y) == 4 && DirY == 1) {
        game.gameOver()
        game.setScore(wynik)
    }
    Głowa.change(LedSpriteProperty.X, DirX)
    Głowa.change(LedSpriteProperty.Y, DirY)
    if (Głowa.get(LedSpriteProperty.X) == Owoc.get(LedSpriteProperty.X) && Głowa.get(LedSpriteProperty.Y) == Owoc.get(LedSpriteProperty.Y)) {
        Owoc.set(LedSpriteProperty.X, Math.randomRange(0, 4))
        Owoc.set(LedSpriteProperty.Y, Math.randomRange(0, 4))
        wynik += 1
        Owoc.set(LedSpriteProperty.Brightness, 100)
        if (Math.randomRange(0, 3) == 0) {
            Owoc.set(LedSpriteProperty.Blink, 100)
        }
    }
    basic.pause(750)
})
 