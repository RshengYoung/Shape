import { expect } from 'chai'
import 'mocha'

import Point from '../include/point'
import Square from '../include/square'

describe("Square", () => {
    let square = new Square(new Point(10, 5), 10)

    it("getWidth()", () => {
        expect(square.getWidth()).equal(10)
    })

    it("getHeight()", () => {
        expect(square.getHeight()).equal(10)
    })

    it("area()", () => {
        expect(square.area()).equal(100)
    })

    it("getLeftTop()", () => {
        expect(square.getLeftTop().toString()).equal("(10, 5)")
    })

    it("setWidth(number)", () => {
        square.setWidth(15)
        expect(square.getWidth()).equal(15)
        expect(square.getHeight()).equal(15)
    })

    it("setHeight(number)", () => {
        square.setHeight(25)
        expect(square.getWidth()).equal(25)
        expect(square.getHeight()).equal(25)
    })

    it("setGetLeftTop(Point)", () => {
        square.setLeftTop(new Point(10, 20))
        expect(square.getLeftTop().toString()).equal("(10, 20)")
    })

    it("draw()", () => {
        expect(square.draw()).equal("Square (10, 20)")
    })
})