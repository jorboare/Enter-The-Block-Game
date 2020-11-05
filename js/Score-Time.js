class Counter {
    constructor(ctx, countersPosX, countersPosY, countersWidth, countersHeight, image) {
        this.ctx = ctx
        this.countersPosX = countersPosX
        this.countersPosY = countersPosY
        this.countersWidth = countersWidth
        this.countersHeight = countersHeight

        this.image = new Image()
        this.image.src = image
    }

    draw() {
        this.ctx.drawImage(this.image, this.countersPosX, this.countersPosY, this.countersWidth, this.countersHeight)
    }
}