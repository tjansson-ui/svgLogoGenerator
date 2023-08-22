import { Shape, Circle, Square, Triangle } from '../lib/shapes.js'


describe("Triangle Class", () => {
    it("renders information for an SVG Triangle", () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual(`<polygon points="125, 10 220, 160 35, 160" fill="blue" />`);
    })

})

describe("Circle Class", () => {
    it("renders information for an SVG Circle", () => {
        const shape = new Circle('blue');
        expect(shape.render()).toEqual(`<circle cx="125" cy="100" r="100" fill="blue" />`);
    })

})

describe("Square Class", () => {
    it("renders information for an SVG Square", () => {
        const shape = new Square('blue');
        expect(shape.render()).toEqual(`<rect width="250" height="250" fill="blue" />`);
    })

})


