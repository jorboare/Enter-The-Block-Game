class Hero {
    constructor(canvasCtx, canvasSize, guideLine, heroWidth, heroHeight, speed) {
        this.ctx = canvasCtx
        this.canvasSize = canvasSize
        this.heroPos = {
            x: this.canvasSize.w / 2 - 135,
            y: this.canvasSize.h / 2 - 135
        }
        this.heroSize = {
            w: heroWidth,
            h: heroHeight
        }

        this.speed = speed

        this.guideLine = guideLine


    }

    drawHero() {
        this.ctx.lineWidth = 2
        this.ctx.strikeStyle = 'blue'
        this.ctx.strokeRect(this.heroPos.x, this.heroPos.y, this.heroSize.w, this.heroSize.h)
        this.moveHero()
    }

    moveHero() {

        if (this.heroPos.x >= (this.guideLine.x - 10) && this.heroPos.x <= (this.guideLine.x) + 239) {
            this.changeDirection("right")
        } else if (this.heroPos.x >= this.canvasSize.w / 2 - 135 + 250 && this.heroPos.y < this.guideLine.y + 239) {
            this.changeDirection("down")
        } else if (this.heroPos.x <= (this.guideLine.x) + 240 && this.heroPos.x > (this.guideLine.x)) {
            this.changeDirection("left")
        } else if (this.heroPos.y <= (this.guideLine.y) + 240 && this.heroPos.y > (this.guideLine.y - 10)) {
            this.changeDirection("up")
        }
        console.log(this.heroPos.y)
        console.log((this.guideLine.y) - 10)
        console.log(this.heroPos.x)
        console.log((this.guideLine.x) - 11)
        console.log(this.speed)

    }

    changeDirection(dir) {
        switch (dir) {
            case "right":
                this.heroPos.x += this.speed
                break;
            case "down":
                this.heroPos.y += this.speed
                break;
            case "left":
                this.speed *= -1
                this.heroPos.x += this.speed
                break;
            case "up":
                this.heroPos.y += this.speed
                break;
        }
    }


}
