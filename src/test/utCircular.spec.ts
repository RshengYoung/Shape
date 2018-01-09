import { expect } from 'chai'
import 'mocha'

import Point from '../include/point'
import Circular from '../include/circular'

describe("Circular", () => {
    let circular = new Circular(new Point(10, 5), 3)

    it("getRadius()", () => {
        expect(circular.getRadius()).equal(3)
    })

    it("getCenter()", () => {
        expect(circular.getCenter().toString()).equal("(10, 5)")
    })

    it("area()", () => {
        expect(circular.area()).equal(28.27431)
    })

    it("setRadius(number)", () => {
        circular.setRadius(5)
        expect(circular.getRadius()).equal(5)
    })

    it("setCenter(Point)", () => {
        circular.setCenter(new Point(15, 10))
        expect(circular.getCenter().toString()).equal("(15, 10)")
    })

    it("draw()", () => {
        expect(circular.draw()).equal("Circular (15, 10)")
    })
})