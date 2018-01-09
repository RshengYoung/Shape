import Point from './point'
import Shape from './shape'

class Retangle implements Shape {
    protected leftTop: Point
    protected width: number
    protected height: number

    constructor(leftTop: Point, width: number, height: number) {
        this.leftTop = leftTop
        this.width = width
        this.height = height
    }

    setLeftTop(leftTop: Point): void {
        this.leftTop = leftTop
    }

    getLeftTop(): Point {
        return this.leftTop
    }

    setWidth(width: number): void {
        this.width = width
    }

    getWidth(): number {
        return this.width
    }

    setHeight(height: number): void {
        this.height = height
    }

    getHeight(): number {
        return this.height
    }

    draw(): string {
        return `Retangle ${this.leftTop.toString()}`
    }

    area(): number {
        return this.width * this.height
    }
}

export default Retangle