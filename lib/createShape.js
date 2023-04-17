// FUNCTION THAT CREATES THE SHAPE CODE BASED ON USER RESPONSES
const createShape = (data) => {

    const openCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    const textCode = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>`
    const closeCode = `</svg>`

    const triangleCode = `<polygon points="50,200 150,0 250,200" stroke= "${data.shapeBorder}" fill= "${data.shapeColor}" stroke-width= "5" />`
    const circleCode = `<circle cx="150" cy="100" r="100" stroke= "${data.shapeBorder}" fill= "${data.shapeColor}" stroke-width="5" />`
    const squareCode = `<rect x="50" y="0" width="200" height="200" stroke="${data.shapeBorder}" fill="${data.shapeColor}" stroke-width="5" />`

    // SHAPE CLASSES IMPORTED FROM SHAPES.JS
    const Shape = require ('./shapes')
    const Triangle = require ('./shapes')
    const Circle = require ('./shapes')
    const Square = require ('./shapes')

    switch (`${data.logoShape}`) {
        case 'Triangle':
            const triangle = new Triangle(openCode, triangleCode, textCode, closeCode)
            output = triangle.renderShape()
            break;

        case 'Circle':
            const circle = new Circle(openCode, circleCode, textCode, closeCode)
            output = circle.renderShape()
            break;

        case 'Square':
            const square = new Square(openCode, squareCode, textCode, closeCode)
            output = square.renderShape()
            break;

    }
    return output
}

// EXPORTS CREATESHAPE FUNCTION FOR USE BY INDEX.JS
module.exports = createShape