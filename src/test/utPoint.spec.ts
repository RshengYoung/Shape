import { expect } from 'chai'
import 'mocha'

import Point from '../model/point'

describe("Point", () => {
    let point = new Point(13, 18)

    it("X", () => {
        expect(point.x).equal(point.x)
    })

    it("Y", () => {
        expect(point.y).equal(point.y)
    })

    it("toString()", () => {
        expect(point.toString()).equal("(13, 18)")
    })
    
})