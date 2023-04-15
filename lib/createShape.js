// FUNCTION THAT CREATES THE SHAPE CODE BASED ON USER RESPONSES
const createShape = (data) => {
    // console.log(data)

    switch (`${data.logoShape}`) {
        case 'Triangle':
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,200 150,0 250,200" stroke= "${data.shapeBorder}" fill= "${data.shapeColor}" stroke-width= "5" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>
            </svg>`;
            break;

        case 'Circle':
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" stroke= "${data.shapeBorder}" fill= "${data.shapeColor}" stroke-width="5" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>
            </svg>`;
            break;

        case 'Square':
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="0" width="200" height="200" stroke="${data.shapeBorder}" fill="${data.shapeColor}" stroke-width="5" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>
            </svg>`;
            break;
            
    }
    return output
}

// EXPORTS CREATESHAPE FUNCTION FOR USE BY INDEX.JS
module.exports = createShape