import { expect } from 'chai'
import 'mocha'

import Point from '../include/point'
import Retangle from '../include/retangle'

describe("Retangle", () => {
    let retangle = new Retangle(new Point(10, 5), 10, 20)

    it("getWidth()", () => {
        expect(retangle.getWidth()).equal(10)
    })

    it("getHeight()", () => {
        expect(retangle.getHeight()).equal(20)
    })

    it("area()", () => {
        expect(retangle.area()).equal(200)
    })

    it("getLeftTop()", () => {
        expect(retangle.getLeftTop().toString()).equal("(10, 5)")
    })

    it("setWidth(number)", () => {
        retangle.setWidth(15)
        expect(retangle.getWidth()).equal(15)
    })

    it("setHeight(number)", () => {
        retangle.setHeight(25)
        expect(retangle.getHeight()).equal(25)
    })

    it("setGetLeftTop(Point)", () => {
        retangle.setLeftTop(new Point(10, 20))
        expect(retangle.getLeftTop().toString()).equal("(10, 20)")
    })

    it("draw()", () => {
        expect(retangle.draw()).equal("Retangle (10, 20)")
    })
})