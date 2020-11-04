const OffTheLineClone = {
    name: 'Off The Line Clone',
    description: 'Clone of the Off The Line game',
    version: '1.0.0',
    license: undefined,
    author: 'Mª Luisa Santos & Jordi Boronat',
    canvasTag: undefined,
    ctx: undefined,
    hero: undefined,
    title: undefined,
    key: " ",
    score: 0,
    timer: 15,
    coins: [],
    controls: undefined,
    canvasSize: {
        w: 700,
        h: 500
    },
    limitSquare: {
        pos: {
            x: undefined,
            y: undefined
        },
        size: {
            w: undefined,
            h: undefined
        }
    },
    interval: undefined,

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createHero()
        this.setListener()
        this.createTitle()
        // setInterval(() => {
        //     this.title.draw()
        // })
        this.startGame()
        this.drawAll()
        this.setTimer()
        this.createCoins()
        this.limitSquareData()
        this.createControlsImage()

        console.log(this.limitSquare)

    },

    setDimensions() {
        // this.canvasSize.w = window.innerWidth
        // this.canvasSize.h = window.innerHeight
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },


    drawAll() {

        setInterval(() => {
            if (this.timer >= 0) {
                this.clearScreen()
                this.drawBackground()
                //this.matrixDraw()
                this.drawLinearSquare()
                //this.drawLimitSquare()
                this.drawFrame()
                //this.drawCoinsGuide()
                this.hero.moveHero()
                this.drawCoins()
                this.drawText()
                this.drawTimer()
                this.stopTimer()
                this.collisionDetector()
                this.hero.drawHero()
                this.drawControls()

            } else {
                this.drawGameOver()
            }

        }, 5)

    },

    drawBackground() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w / 2), this.canvasSize.h / 2 - (this.canvasSize.h / 2), this.canvasSize.w, this.canvasSize.h)
    },

    startGame() {
        document.onkeypress = e => {
            if (e.key === 'Enter') {
                const image = document.querySelector('.center')
                image.classList.add('none')
            }
            if (e.key === this.key) {
                this.hero.pressKeyMove()
            }

        }

    },

    drawLinearSquare() {
        //this.ctx.filter = 'blur(2px)'
        this.ctx.lineWidth = 2
        let alpha = 0.6
        let width = 234
        let height = 234

        this.ctx.strokeStyle = `#FFC8D2`
        this.ctx.strokeRect(this.canvasSize.w / 2 - (125), this.canvasSize.h / 2 - (125), 250, 250)

        for (let i = 0; i < 10; i++) {
            this.ctx.strokeStyle = `rgba(235, 143, 170, ${alpha})`
            this.ctx.strokeRect(this.canvasSize.w / 2 - (width / 2), this.canvasSize.h / 2 - (width / 2), width, height)
            alpha -= 0.1
            width -= 16
            height -= 16
        }

    },

    drawLimitSquare() {
        //this.ctx.filter = 'blur(2px)'
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'red'
        this.ctx.strokeRect(this.canvasSize.w / 2 - 135, this.canvasSize.h / 2 - 135, 270, 270)
    },

    limitSquareData() {
        this.limitSquare.pos.x = this.canvasSize.w / 2 - 135
        this.limitSquare.pos.y = this.canvasSize.h / 2 - 135
        this.limitSquare.size.w = 270
        this.limitSquare.size.h = 270
    },

    drawCoinsGuide() {
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(this.canvasSize.w / 2 - 75, this.canvasSize.h / 2 - 75, 150, 150)
    },

    drawFrame() {
        this.ctx.lineWidth = 1
        this.ctx.strokeStyle = '#77EBC7'
        this.ctx.strokeRect(this.canvasSize.w / 2 - 275, this.canvasSize.h / 2 - 225, 550, 450)
    },

    drawGameOver() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.canvasSize.w / 2 - (this.canvasSize.w / 2), this.canvasSize.h / 2 - (this.canvasSize.h / 2), this.canvasSize.w, this.canvasSize.h)
        this.ctx.font = "100 30px roboto, sans-serif"
        this.ctx.textAlign = "start"
        this.ctx.textBaseLine = "bottom"
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`TIME IS OVER`, this.canvasSize.w / 2 - 90, this.canvasSize.h / 2 - 40)

        this.ctx.font = "100 20px roboto, sans-serif"
        this.ctx.textAlign = "start"
        this.ctx.textBaseLine = "bottom"
        this.ctx.fillStyle = "yellow"
        this.ctx.fillText(`Score: ${this.score}`, this.canvasSize.w / 2 - 35, this.canvasSize.h / 2 - 10)
    },

    drawCoins() {

        this.coins.forEach(elm => {
            elm.draw()

        })

    },

    createControlsImage() {
        this.controls = new Image()
        this.controls.src = './images/controls.png'
    },

    drawControls() {
        this.ctx.drawImage(this.controls, this.canvasSize.w / 2 - 70, 400, 140, 24)
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
        this.ctx.font = "100 23px roboto, sans-serif"
        this.ctx.textAlign = "start"
        this.ctx.textBaseLine = "bottom"
        this.ctx.fillStyle = "yellow"
        this.ctx.fillText(`Score: ${this.score}`, 90, 50)

    },

    drawTimer() {
        this.ctx.font = "100 23px roboto, sans-serif"
        this.ctx.textAlign = "start"
        this.ctx.textBaseLine = "bottom"
        this.ctx.fillStyle = "yellow"
        this.ctx.fillText(`Time: ${this.timer}`, 525, 50)
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
        this.hero = new Hero(this.ctx, this.canvasSize, this.limitSquare, 20, 20, 1)

    },

    createTitle() {
        this.title = new Title(this.ctx, 0, 0, 700, 500)

    },



    createCoins() {

        //Línea 1
        let coin1 = new Coins(this.ctx, this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 - 80, 10, 10)
        let coin2 = new Coins(this.ctx, this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 - 80, 10, 10)
        let coin3 = new Coins(this.ctx, this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 - 80, 10, 10)
        let coin4 = new Coins(this.ctx, this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 - 80, 10, 10)
        //Línea 2
        let coin5 = new Coins(this.ctx, this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 - 30, 10, 10)
        let coin6 = new Coins(this.ctx, this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 - 30, 10, 10)
        let coin7 = new Coins(this.ctx, this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 - 30, 10, 10)
        let coin8 = new Coins(this.ctx, this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 - 30, 10, 10)

        //Línea 3
        let coin9 = new Coins(this.ctx, this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 + 20, 10, 10)
        let coin10 = new Coins(this.ctx, this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 + 20, 10, 10)
        let coin11 = new Coins(this.ctx, this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 + 20, 10, 10)
        let coin12 = new Coins(this.ctx, this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 + 20, 10, 10)

        //Línea 4
        let coin13 = new Coins(this.ctx, this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 + 70, 10, 10)
        let coin14 = new Coins(this.ctx, this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 + 70, 10, 10)
        let coin15 = new Coins(this.ctx, this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 + 70, 10, 10)
        let coin16 = new Coins(this.ctx, this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 + 70, 10, 10)

        this.coins.push(coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin15, coin16)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    collisionDetector() {

        this.coins.forEach(elm => {
            if (this.hero.heroPos.x < elm.coinPos.x + elm.coinSize.w &&
                this.hero.heroPos.x + this.hero.heroSize.w > elm.coinPos.x &&
                this.hero.heroPos.y < elm.coinPos.y + elm.coinSize.h &&
                this.hero.heroPos.y + this.hero.heroSize.h > elm.coinPos.y) {
                let index = this.coins.indexOf(elm)
                if (index !== -1) {
                    this.coins.splice(index, 1)
                    this.score++
                }
            }
        })
    },

    setListener() {
        document.onkeypress = e => {
            if (e.key === this.key) {
                this.hero.pressKeyMove()
            }
        }
    }


}



 // CEMENTERIO DE CÓDIGO

        // //Línea 1
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 - 80, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 - 80, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 - 80, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 - 80, 10, 10)
        // //Línea 2
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 - 30, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 - 30, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 - 30, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 - 30, 10, 10)
        // //Línea 3
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 + 20, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 + 20, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 + 20, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 + 20, 10, 10)
        // //Línea 4
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 + 70, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 - 30, this.canvasSize.h / 2 + 70, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 20, this.canvasSize.h / 2 + 70, 10, 10)
        // this.ctx.strokeRect(this.canvasSize.w / 2 + 70, this.canvasSize.h / 2 + 70, 10, 10)

        //<------------------------>
          // this.ctx.lineWidth = 2
        // this.ctx.strokeStyle = 'yellow'



        //Línea 1
        // let coin1 = []
        // let coin2 = []
        // let coin3 = []
        // let coin4 = []
        // let num = -80
        // for (let i = 0; i < 4; i++) {
        //     coin1.push(this.ctx.strokeRect(this.canvasSize.w / 2 + (num), this.canvasSize.h / 2 - 80, 10, 10))
        //     coin2.push(this.ctx.strokeRect(this.canvasSize.w / 2 + (num), this.canvasSize.h / 2 - 30, 10, 10))
        //     coin3.push(this.ctx.strokeRect(this.canvasSize.w / 2 + (num), this.canvasSize.h / 2 + 20, 10, 10))
        //     coin4.push(this.ctx.strokeRect(this.canvasSize.w / 2 + (num), this.canvasSize.h / 2 + 70, 10, 10))
        //     num += 50
        // }
        // console.log(coin1)

        //<------------------------->


   // let num = -80
        // for (let i = 0; i < 4; i++) {
        //     if (this.hero.heroPos.x < this.canvasSize.w / 2 + (num) + 10 &&
        //         this.hero.heroPos.x + 20 > this.canvasSize.w / 2 + (num) &&
        //         this.hero.heroPos.y < this.canvasSize.h / 2 - 80 + 10 &&
        //         this.hero.heroPos.y + 20 > this.canvasSize.h / 2 - 80) {

        //     }
        //     if (this.hero.heroPos.x < this.canvasSize.w / 2 + (num) + 10 &&
        //         this.hero.heroPos.x + 20 > this.canvasSize.w / 2 + (num) &&
        //         this.hero.heroPos.y < this.canvasSize.h / 2 - 30 + 10 &&
        //         this.hero.heroPos.y + 20 > this.canvasSize.h / 2 - 30) {

        //     }
        //     if (this.hero.heroPos.x < this.canvasSize.w / 2 + (num) + 10 &&
        //         this.hero.heroPos.x + 20 > this.canvasSize.w / 2 + (num) &&
        //         this.hero.heroPos.y < this.canvasSize.h / 2 + 20 + 10 &&
        //         this.hero.heroPos.y + 20 > this.canvasSize.h / 2 + 20) {

        //     }
        //     if (this.hero.heroPos.x < this.canvasSize.w / 2 + (num) + 10 &&
        //         this.hero.heroPos.x + 20 > this.canvasSize.w / 2 + (num) &&
        //         this.hero.heroPos.y < this.canvasSize.h / 2 + 70 + 10 &&
        //         this.hero.heroPos.y + 20 > this.canvasSize.h / 2 + 70) {

        //     }
        //     num += 50
        // }



        // if (this.hero.heroPos.x < this.canvasSize.w / 2 - 80 + 10 &&
        //     this.hero.heroPos.x + 20 > this.canvasSize.w / 2 - 80 &&
        //     this.hero.heroPos.y < this.canvasSize.h / 2 - 80 + 10 &&
        //     this.hero.heroPos.y + 10 > this.canvasSize.h / 2 - 80) {
        // }


        //<-------------------------->

            // if (this.coins.find(elm => {
        //     return (this.hero.heroPos.x < elm.coinPos.x + elm.coinSize.w &&
        //     this.hero.heroPos.x + this.hero.heroSize.w > elm.coinPos.x &&
        //     this.hero.heroPos.y < elm.coinPos.y + elm.coinSize.h &&
        //     this.hero.heroPos.y + this.hero.heroSize.h > elm.coinPos.y);
        // })) {
        //     this.coins.shift()
        // }

    //     if (this.hero.heroPos.x < this.coins[0].coinPos.x + this.coins[0].coinSize.w &&
    //         this.hero.heroPos.x + this.hero.heroSize.w > this.coins[0].coinPos.x &&
    //         this.hero.heroPos.y < this.coins[0].coinPos.y + this.coins[0].coinSize.h &&
    //         this.hero.heroPos.y + this.hero.heroSize.h > this.coins[0].coinPos.y) {
    //                 alert('salsota')
    // }

        // console.log(this.hero.heroPos.x)
        // console.log(this.coins[0].coinPos.x)