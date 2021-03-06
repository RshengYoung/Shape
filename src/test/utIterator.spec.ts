import { expect } from 'chai'
import 'mocha'

import Point from '../include/point'
import Shape from '../include/shape'
import Retangle from '../include/retangle'
import Circular from '../include/circular'
import Square from '../include/square'
import Iterator from '../include/iterator'

describe("Iterator", () => {
    let retangle = new Retangle(new Point(0, 5), 10, 5)
    let circular = new Circular(new Point(10, 15), 5)
    let square = new Square(new Point(10, 5), 13)

    it("currentItem()", () => {
        let iter = new Iterator<Shape>([retangle, circular, square])
        expect(iter.currentItem().draw()).equal("Retangle (0, 5)")
    })

    it("first()", () => {
        let iter = new Iterator<Shape>([retangle, circular, square])
        iter.first()
        expect(iter.currentItem().draw()).equal("Retangle (0, 5)")
    })

    it("next() and isDone()", () => {
        let iter = new Iterator<Shape>([retangle, circular, square])
        iter.first()
        expect(iter.currentItem().draw()).equal("Retangle (0, 5)")
        expect(iter.isDone()).is.false
        iter.next()
        expect(iter.currentItem().draw()).equal("Circular (10, 15)")
        expect(iter.isDone()).is.false
        iter.next()
        expect(iter.currentItem().draw()).equal("Square (10, 5)")
        expect(iter.isDone()).is.true
    })

    it("Exception", () => {
        let iter = new Iterator<Shape>([retangle, circular, square])
        iter.first()
        expect(iter.currentItem().draw()).equal("Retangle (0, 5)")
        expect(iter.isDone()).is.false
        iter.next()
        expect(iter.currentItem().draw()).equal("Circular (10, 15)")
        expect(iter.isDone()).is.false
        iter.next()
        expect(iter.currentItem().draw()).equal("Square (10, 5)")
        expect(iter.isDone()).is.true
        iter.next()
        try {
            iter.currentItem()
        } catch (error) {
            expect(error).equal("Error: The index is illegal.")
        }
    })

})