import { expect } from 'chai'
import 'mocha'

import Point from '../include/point'
import Shape from '../include/shape'
import Retangle from '../include/retangle'
import Circular from '../include/circular'
import Square from '../include/square'

describe("Shape", () => {
    let retangle = new Retangle(new Point(0, 5), 10, 5)
    let circular = new Circular(new Point(10, 15), 5)
    let square = new Square(new Point(10, 5), 13)

    let shapes: Shape[] = [retangle, circular, square]

    it("area()", () => {
        expect(shapes[0].area()).equal(50)
        expect(shapes[1].area()).equal(78.53975)
        expect(shapes[2].area()).equal(169)
    })

    it("draw()", () => {
        expect(shapes[0].draw()).equal("Retangle (0, 5)")
        expect(shapes[1].draw()).equal("Circular (10, 15)")
        expect(shapes[2].draw()).equal("Square (10, 5)")
    })
})