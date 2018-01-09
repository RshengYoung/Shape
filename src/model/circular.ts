import Point from './point'
import Shape from './shape'

export class Circular implements Shape {
    private center: Point
    private radius: number

    constructor(center: Point, radius: number) {
        this.center = center
        this.radius = radius
    }

    setRadius(radius: number): void {
        this.radius = radius
    }

    getRadius(): number {
        return this.radius
    }

    setCenter(center: Point): void {
        this.center = center
    }

    getCenter(): Point {
        return this.center
    }

    draw(): string {
        return `Circular ${this.center.toString()}`
    }

    area(): number {
        return this.radius * this.radius * 3.14159
    }
}

export default Circular