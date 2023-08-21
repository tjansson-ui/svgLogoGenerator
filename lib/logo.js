import * as Shape from "./shapes.js"

// Generates SVG using selections from inquirer questions
export function generateLogo(selection) {

    const shape = new Shape[selection.shape](selection.shapeColor)

    // return SVG code
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="125" y="120" font-size="60" text-anchor="middle" fill="${selection.textColor}">${selection.text}</text>
</svg>`
}