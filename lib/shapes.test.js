// IMPORTING SHAPE CLASSES FOR TESTING
const Shape = require('./shape')
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

// CONSTRUCTORS THAT ARE NOT DYNAMIC/CAN BE USED GLOBALLY
const openCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
const closeCode = `</svg>`



// CAN THE SHAPE PARENT CLASS TAKE ON TEXT CHARACTERS AND FONT COLOR BASED ON USER INPUT?
describe('Shape', () => {
    it('Should take a text input and set font color', () => {

        const userCharsResponse = "WOW"
        const userTextColorResponse = "pink"
        const sampleText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userTextColorResponse}">${userCharsResponse}</text>`

        const sample = new Shape(openCode, sampleText, closeCode)

        expect(sample.svgText).toBe('<text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">WOW</text>')
    })
}
)

// CAN THE LOGO TAKE ON THE SHAPE OF A TRIANGLE, CIRCLE, OR SQUARE BASED ON USER INPUT?
describe('Triangle', () => {
    it('Should receive a shape field from the Triangle subclass', () => {

        const userShapeResponse = "Triangle"
        const sampleText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LOL</text>`
        const sample = new Triangle(openCode, userShapeResponse, sampleText, closeCode)

        expect(sample.svgShape).toBe("Triangle")

    })
})

describe('Circle', () => {
    it('Should receive a shape field from the Circle subclass', () => {

        const userShapeResponse = 'Circle'
        const sampleText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LOL</text>`
        const sample = new Circle(openCode, userShapeResponse, sampleText, closeCode)

        expect(sample.svgShape).toBe("Circle")

    })
})

describe('Square', () => {
    it('Should receive a shape field from the Square subclass', () => {

        const userShapeResponse = 'Square'
        const sampleText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LOL</text>`
        const sample = new Triangle(openCode, userShapeResponse, sampleText, closeCode)

        expect(sample.svgShape).toBe("Square")

    })
})

// CAN THE SHAPES TAKE ON PROPERTIES BASED ON USER INPUT AND GENERATE AN SVG FILE TO MATCH?
describe('Triangle.renderShape', () => {
    it('Should take on properties based on user input', () => {

        const userTextResponse = 'LOL'
        const userTextColorResponse = 'black'
        const userFillResponse = 'yellow'
        const userBorderResponse = 'black'
        const textCode = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userTextColorResponse}">${userTextResponse}</text>`
        const triangleCode = `<polygon points="50,200 150,0 250,200" stroke= "${userBorderResponse}" fill= "${userFillResponse}" stroke-width= "5" />`

        const triangleSample = new Triangle(openCode, triangleCode, textCode, closeCode)

        expect(triangleSample.renderShape()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,200 150,0 250,200" stroke= "black" fill= "yellow" stroke-width= "5" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">LOL</text></svg>`)

    })
})

describe('Circle.renderShape', () => {
    it('Should take on properties based on user input', () => {

        const userTextResponse = 'BOO'
        const userTextColorResponse = 'black'
        const userFillResponse = 'white'
        const userBorderResponse = 'black'
        const textCode = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userTextColorResponse}">${userTextResponse}</text>`
        const circleCode = `<circle cx="150" cy="100" r="100" stroke= "${userBorderResponse}" fill= "${userFillResponse}" stroke-width="5" />`

        const circleSample = new Circle(openCode, circleCode, textCode, closeCode)

        expect(circleSample.renderShape()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" stroke= "black" fill= "white" stroke-width="5" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BOO</text></svg>`)

    })
})

describe('Square.renderShape', () => {
    it('Should take on properties based on user input', () => {

        const userTextResponse = 'YES'
        const userTextColorResponse = 'black'
        const userFillResponse = 'yellow'
        const userBorderResponse = 'black'

        const textCode = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userTextColorResponse}">${userTextResponse}</text>`
        const squareCode = `<rect x="50" y="0" width="200" height="200" stroke="${userBorderResponse}" fill="${userFillResponse}" stroke-width="5" />`

        const squareSample = new Square(openCode, squareCode, textCode, closeCode)

        expect(squareSample.renderShape()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" width="200" height="200" stroke="black" fill="yellow" stroke-width="5" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">YES</text></svg>`)

    })
})