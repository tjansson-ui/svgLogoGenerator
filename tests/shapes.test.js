import { Shape, Circle, Square, Triangle } from "../lib/shapes.js"


describe("Triangle", () => {
    it("should render information for an SVG Triangle", () => {
        const shape = new Triangle();
        expect(shape.render()).toEqual(`<polygon points="125, 10 220, 160 35, 160" fill="${shape.color}" />`);
    })

})

describe("Circle", () => {
    it("should render information for an SVG Triangle", () => {
        const shape = new Circle();
        expect(shape.render()).toEqual(`<circle cx="125" cy="100" r="100" fill="${this.color}" />`);
    })

})

describe("Square", () => {
    it("should render information for an SVG Triangle", () => {
        const shape = new Square();
        expect(shape.render()).toEqual(`<rect width="250" height="250" fill="${this.color}" />`);
    })

})


