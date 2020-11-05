class Win {
    constructor(ctx, winPosX, winPosY, winWidth, winHeight) {
        this.ctx = ctx
        this.winPosX = winPosX
        this.winPosY = winPosY
        this.winWidth = winWidth
        this.winHeight = winHeight

        this.image = new Image()
        this.image.src = "./images/Next-Level.png"
    }

    draw() {
        this.ctx.winImage(this.image, this.winPosX, this.winPosY, this.winWidth, this.winHeight)
    }
}