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
        this.drawAll()
        this.setListener()
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
            this.drawLinearSquare()
            this.drawCoinsGuide()
            this.hero.drawHero()
            this.drawCoins()
            this.drawText()
            this.drawTimer()
            this.stopTimer()

        }, 1000 / 60)

    },

    drawBackground() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w / 2), this.canvasSize.h / 2 - (this.canvasSize.h / 2), this.canvasSize.w, this.canvasSize.h)
    },

    drawLinearSquare() {
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
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 - 75, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 5, this.canvasSize.h / 2 - 75, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 65, this.canvasSize.h / 2 - 75, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 - 10, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 5, this.canvasSize.h / 2 - 10, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 65, this.canvasSize.h / 2 - 10, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 + 65, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 - 5, this.canvasSize.h / 2 + 65, 10, 10)
        this.ctx.strokeRect(this.canvasSize.w / 2 + 65, this.canvasSize.h / 2 + 65, 10, 10)
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

            }
        }
    }


}



