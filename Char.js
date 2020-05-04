class Char {
    constructor(amount) {
        this.amount = amount
        this.charPos = []
        this.temp = []
        this.charWidth = 0
        this.charHeight = 0
    }

    between(min, max) {
        return Math.floor(Math.random() * (max-min) + min)
    }
    

    getCharPos() {
        this.charPos = []
        for (let i = 0; i < this.amount; i++) {
            this.charWidth = this.between(1, numberOfSquares -1)
            this.charHeight = this.between(1, numberOfSquares - 1)
            this.temp = []
            this.temp.push(this.charWidth)
            this.temp.push(this.charHeight)
            this.charPos.push(this.temp)
        }
        return this.charPos
    }
}