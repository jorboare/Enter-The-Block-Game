class Coins {
    constructor(ctx, coinPosx, coinPosy, coinWidth, coinHeight) {
        this.ctx = ctx
        this.coinPos = {
            x: coinPosx,
            y: coinPosy
        }
        this.coinSize = {
            w: coinWidth,
            h: coinHeight
        }
        this.image = new Image()
        this.image.src = "images/goldCoin5.png"

    }
    draw() {
        this.ctx.drawImage(this.image, this.coinPos.x, this.coinPos.y, this.coinSize.w, this.coinSize.h)

    }


}

