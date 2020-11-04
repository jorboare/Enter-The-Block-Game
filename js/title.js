class Title {
    constructor(ctx, titlePosX, titlePosY, titleWidth, titleHeight) {
        this.ctx = ctx
        this.titlePosX = titlePosX
        this.titlePosY = titlePosY
        this.titleWidth = titleWidth
        this.titleHeight = titleHeight

        this.image = new Image()
        this.image.src = "./images/Enter-the-Block.png"
    }

    draw() {
        this.ctx.drawImage(this.image, this.titlePosX, this.titlePosY, this.titleWidth, this.titleHeight)
    }
}