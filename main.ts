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
let newy = 0
let newx = 0
let jeszczeraz = 0
let wynik = 0
let GlowaY = 0
let GlowaX = 0
let Cialo: game.LedSprite[] = []
let DirX = 0
let DirY = 0
DirY = 0
DirX = 1
let Owoc = game.createSprite(4, 4)
Owoc.set(LedSpriteProperty.Brightness, 100)
Cialo.insertAt(0, game.createSprite(GlowaX, GlowaY))
let pauza = 750
basic.forever(function () {
    if (GlowaX == 4 && DirX == 1) {
        game.setScore(wynik)
        game.gameOver()
    } else if (GlowaX == 0 && DirX == -1) {
        game.setScore(wynik)
        game.gameOver()
    } else if (GlowaY == 0 && DirY == -1) {
        game.setScore(wynik)
        game.gameOver()
    } else if (GlowaY == 4 && DirY == 1) {
        game.setScore(wynik)
        game.gameOver()
    }
    GlowaX += DirX
    GlowaY += DirY
    for (let value of Cialo) {
        if (GlowaX == value.get(LedSpriteProperty.X) && GlowaY == value.get(LedSpriteProperty.Y)) {
            game.setScore(wynik)
            game.gameOver()
        }
    }
    Cialo.insertAt(0, game.createSprite(GlowaX, GlowaY))
    if (GlowaX == Owoc.get(LedSpriteProperty.X) && GlowaY == Owoc.get(LedSpriteProperty.Y)) {
        jeszczeraz = 1
        while (jeszczeraz == 1) {
            jeszczeraz = 0
            newx = Math.randomRange(0, 4)
            newy = Math.randomRange(0, 4)
            for (let value2 of Cialo) {
                if (newx == value2.get(LedSpriteProperty.X) && newy == value2.get(LedSpriteProperty.Y)) {
                    jeszczeraz = 1
                }
            }
        }
        if (Owoc.get(LedSpriteProperty.Blink) == 100) {
            if (Cialo.length > 1) {
                Cialo.pop().delete()
            }
            if (Cialo.length > 1) {
                Cialo.pop().delete()
            }
            if (pauza > 50) {
                pauza += -50
            }
        }
        Owoc.set(LedSpriteProperty.X, newx)
        Owoc.set(LedSpriteProperty.Y, newy)
        wynik += 1
        Owoc.set(LedSpriteProperty.Brightness, 100)
        Owoc.set(LedSpriteProperty.Blink, 0)
        if (Math.randomRange(0, 3) == 0) {
            Owoc.set(LedSpriteProperty.Blink, 100)
        }
    } else {
        Cialo.pop().delete()
    }
    basic.pause(pauza)
})
 