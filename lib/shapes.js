
export class Shape {
    constructor(shapeColor) {
        this.color = shapeColor
    }
    render() {
        throw new Error("Make sure to impliment render() method")
    }
}

export class Circle extends Shape {
    render() {
        return `<circle cx="125" cy="100" r="100" fill="${this.color}" />`
    }
}

export class Square extends Shape {
    render() {
        return `<rect width="250" height="250" fill="${this.color}" />`
    }
}

export class Triangle extends Shape {
    render() {
        return `<polygon points="125, 10 220, 160 35, 160" fill="${this.color}" />`
    }
}
