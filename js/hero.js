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

        this.direction = ''


    }

    drawHero() {
        this.ctx.lineWidth = 2
        this.ctx.strikeStyle = 'blue'
        this.ctx.strokeRect(this.heroPos.x, this.heroPos.y, this.heroSize.w, this.heroSize.h)
        // var time = new Date();
        // this.ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    }

    moveHero() {

        // if (this.heroPos.x >= this.canvasSize.w / 2 - 135 && this.heroPos.x < this.canvasSize.w / 2 + 115) {
        //     this.direction = 'top'
        //     this.changeDirection("right")
        //     console.log(this.direction)
        // } else if (this.heroPos.x > this.canvasSize.w / 2 && this.heroPos.y < this.canvasSize.h / 2 + 115) {
        //     this.direction = 'right'
        //     this.changeDirection("down")
        //     console.log(this.direction)
        // } else if (this.heroPos.x <= this.canvasSize.w / 2 + 115 && this.heroPos.x > this.canvasSize.w / 2 - 135) {
        //     this.direction = 'bottom'
        //     this.changeDirection("left")
        //     console.log(this.direction)
        // } else if (this.heroPos.x < this.canvasSize.w / 2 && this.heroPos.y >= this.canvasSize.h / 2 - 135) {
        //     this.direction = 'left'
        //     this.changeDirection("up")
        //     console.log(this.direction)
        // } else {
        //     this.changeDirection("left")
        // }
        if (this.heroPos.x >= this.canvasSize.w / 2 - 135 && this.heroPos.x < this.canvasSize.w / 2 + 115) {
            this.direction = 'top'
            this.changeDirection("right")
            console.log(this.direction)
        } else if (this.heroPos.x > this.canvasSize.w / 2 && this.heroPos.y < this.canvasSize.h / 2 + 115) {
            this.direction = 'right'
            this.changeDirection("down")
            console.log(this.direction)
        } else if (this.heroPos.x <= this.canvasSize.w / 2 + 115 && this.heroPos.x > this.canvasSize.w / 2 - 135) {
            this.direction = 'bottom'
            this.changeDirection("left")
            console.log(this.direction)
        } else if (this.heroPos.x < this.canvasSize.w / 2 && this.heroPos.y >= this.canvasSize.h / 2 - 135) {
            this.direction = 'left'
            this.changeDirection("up")
            console.log(this.direction)
        } else {
            this.changeDirection("left")
        }



        // console.log(this.heroPos.y)
        // console.log((this.canvasSize.h / 2 + - 135))
        // console.log(this.heroPos.x)
        // console.log(this.canvasSize.w / 2 + 115)
        // console.log(this.speed)

    }

    pressKeyMove() {

        if (this.heroPos.y > this.canvasSize.h / 2 && this.heroPos.x < this.canvasSize.w / 2 + 115) {

            this.changeDirection("down")
        } else if (this.heroPos.x > this.canvasSize.w / 2 && this.heroPos.y < this.canvasSize.h / 2 + 115) {

            this.changeDirection("left")
        } else if (this.heroPos.y < this.canvasSize.h / 2 && this.heroPos.x > this.canvasSize.w / 2 - 135) {

            this.changeDirection("up")
        } else if (this.heroPos.x < this.canvasSize.w / 2 && this.heroPos.y >= this.canvasSize.h / 2 - 135) {

            this.changeDirection("left")
        }
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
        // CEMENTERIO DE CÓDIGO

        // if (this.heroPos.x >= (this.guideLine.x - 10) && this.heroPos.x <= (this.guideLine.x) + 239) {
        //     this.changeDirection("right")
        // } else if (this.heroPos.x >= this.canvasSize.w / 2 - 135 + 250 && this.heroPos.y < this.guideLine.y + 239) {
        //     this.changeDirection("down")
        // } else if (this.heroPos.x <= (this.guideLine.x) + 240 && this.heroPos.x > (this.guideLine.x)) {
        //     this.changeDirection("left")
        // } else if (this.heroPos.y <= (this.guideLine.y) + 240 && this.heroPos.y > (this.guideLine.y - 10)) {
        //     this.changeDirection("up")
        // }

         // if (this.heroPos.x >= (this.guideLine.x - 10) && this.heroPos.x <= (this.guideLine.x) + 239) {
        //     this.changeDirection("right")
        // }
        // else if (this.heroPos.x >= this.canvasSize.w / 2 - 135 + 250 && this.heroPos.y < this.guideLine.y + 239) {
        //     this.changeDirection("down")
        // } else if (this.heroPos.x <= (this.guideLine.x) + 240 && this.heroPos.x > (this.guideLine.x)) {
        //     this.changeDirection("left")
        // } else if (this.heroPos.y <= (this.guideLine.y) + 240 && this.heroPos.y > (this.guideLine.y - 10)) {
        //     this.changeDirection("up")
        // } else {
        //     this.changeDirection("left")
        // }