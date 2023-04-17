// VARIABLES THAT STORE SVG CODE
const openCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
const textCode = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>`;
const closeCode = `</svg>`

const triangleCode = `<polygon points="180 45 180" stroke= color fill= "${data.shapeColor}" stroke-width= "1" />`
const circleCode = `<circle cx="25" cy="75" r="100" stroke= "${data.shapeColor}" fill= "${data.shapeColor}" stroke-width="1" />`
const squareCode = `<rect x="10" y="10" width="300" height="200" stroke="${data.shapeColor}" fill="${data.shapeColor}" stroke-width="1" />`

// FUNCTION THAT CREATES THE SHAPE CODE BASED ON USER RESPONSES
const createShape = (data) => {
    // console.log(data)

    switch (`${data.logoShape}`) {
        case 'Triangle':
            output = openCode + triangleCode + textCode + closeCode;
            break;

        case 'Circle':
            output = openCode + circleCode + textCode + closeCode;
            break;

        case 'Square':
            output = openCode + squareCode + textCode + closeCode;
            break;

    }
    return output
}

// EXPORTS CREATESHAPE FUNCTION FOR USE BY INDEX.JS
module.exports = createShape