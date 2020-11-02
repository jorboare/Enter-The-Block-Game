const OffTheLineClone = {
    name: 'Off The Line Clone',
    description: 'Clone of the Off The Line game',
    version: '1.0.0',
    license: undefined,
    author: 'Mª Luisa Santos & Jordi Boronat',
    canvasTag: undefined,
    ctx: undefined,
    hero: undefined,
    key: " ",
    score: 0,
    timer: 30,
    canvasSize: {
        w: 700,
        h: 500
    },
    guideLine: {
        x: undefined,
        y: undefined
    },
    interval: undefined,

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.guideLineInsert()
        this.createHero()
        this.setListener()
        this.drawAll()
        this.setTimer()

    },

    setDimensions() {
        // this.canvasSize.w = window.innerWidth
        // this.canvasSize.h = window.innerHeight
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    guideLineInsert() {
        this.guideLine.x = this.canvasSize.w / 2 - 125
        this.guideLine.y = this.canvasSize.h / 2 - 125
    },

    drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.drawBackground()
            //this.matrixDraw()
            this.drawLinearSquare()
            //this.drawCoinsGuide()
            this.hero.drawHero()
            this.hero.moveHero()
            this.drawCoins()
            this.drawText()
            this.drawTimer()
            this.stopTimer()
        }, 5)

    },

    drawBackground() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w / 2), this.canvasSize.h / 2 - (this.canvasSize.h / 2), this.canvasSize.w, this.canvasSize.h)
    },

    drawLinearSquare() {
        //this.ctx.filter = 'blur(2px)'
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(this.canvasSize.w / 2 - 125, this.canvasSize.h / 2 - 125, 250, 250)
    },
    drawCoinsGuide() {
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 - 75, 150, 150)
    },

    drawCoins() {
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'yellow'
        //Línea 1
        this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 - 80, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 - 80, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 - 80, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 - 80, 10, 10)
        //Línea 2
        this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 - 30, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 - 30, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 - 30, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 - 30, 10, 10)
        //Línea 3
        this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 + 20, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 + 20, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 + 20, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 + 20, 10, 10)
        //Línea 4
        this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 + 70, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 + 70, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 + 70, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 + 70, 10, 10)
    },

    matrixDraw() {
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = '#00ffff'
        //Linea 1
        this.ctx.strokeRect(this.canvasSize.w / 2 - 125, this.canvasSize.h / 2 - 125, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 - 125, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 25, this.canvasSize.h / 2 - 125, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 25, this.canvasSize.h / 2 - 125, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 75, this.canvasSize.h / 2 - 125, 50, 50)

        //Línea 2
        this.ctx.strokeRect(this.canvasSize.w / 2 - 125, this.canvasSize.h / 2 - 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 - 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 25, this.canvasSize.h / 2 - 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 25, this.canvasSize.h / 2 - 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 75, this.canvasSize.h / 2 - 75, 50, 50)
        //Línea 3
        this.ctx.strokeRect(this.canvasSize.w / 2 - 125, this.canvasSize.h / 2 - 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 - 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 25, this.canvasSize.h / 2 - 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 25, this.canvasSize.h / 2 - 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 75, this.canvasSize.h / 2 - 25, 50, 50)
        //Línea 4
        this.ctx.strokeRect(this.canvasSize.w / 2 - 125, this.canvasSize.h / 2 + 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 + 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 25, this.canvasSize.h / 2 + 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 25, this.canvasSize.h / 2 + 25, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 75, this.canvasSize.h / 2 + 25, 50, 50)
        //Línea 5
        this.ctx.strokeRect(this.canvasSize.w / 2 - 125, this.canvasSize.h / 2 + 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 + 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 25, this.canvasSize.h / 2 + 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 25, this.canvasSize.h / 2 + 75, 50, 50)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 75, this.canvasSize.h / 2 + 75, 50, 50)


    },

    drawText() {
        this.ctx.font = " 20px verdana, sans-serif"
        this.ctx.textAlign = "start"
        this.ctx.textBaseLine = "bottom"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`Score: ${this.score}`, 100, 100)

    },

    drawTimer() {
        this.ctx.font = " 20px verdana, sans-serif"
        this.ctx.textAlign = "start"
        this.ctx.textBaseLine = "bottom"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`Time: ${this.timer}`, 500, 100)
    },

    setTimer() {
        this.interval = setInterval(() => {
            this.timer -= 1
        }, 1000)

    },

    stopTimer() {
        if (this.timer === 0) {
            clearInterval(this.interval)
        }
    },


    createHero() {
        this.hero = new Hero(this.ctx, this.canvasSize, this.guideLine, 20, 20, 1)
        // this.hero = new Hero(this.ctx, this.canvasSize, 100, 100, 100, 100)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    setListener() {
        document.onkeypress = e => {
            if (e.key === this.key) {
                this.hero.pressKeyMove()
            }
        }
    }


}



