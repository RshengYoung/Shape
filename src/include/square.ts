import Point from './point'
import Retangle from './retangle'

class Square extends Retangle {
    constructor(leftTop: Point, width: number) {
        super(leftTop, width, width)
    }

    setWidth(width: number): void {
        this.width = width
        this.height = width
    }

    setHeight(height: number): void {
        this.setWidth(height)
    }

    draw(): string {
        return `Square ${this.leftTop.toString()}`
    }
}

export default Square