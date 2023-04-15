// FUNCTION THAT CREATES THE SHAPE CODE BASED ON USER RESPONSES
const createShape = (data) => {
    // console.log(data)

    switch (`${data.logoShape}`) {
        case 'Triangle':
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="180 45 180" stroke= color fill= "${data.shapeColor}" stroke-width= "1" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>
            </svg>`;
            break;

        case 'Circle':
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="75" r="100" stroke= "${data.shapeColor}" fill= "${data.shapeColor}" stroke-width="1" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>
            </svg>`;
            break;

        case 'Square':
            output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="300" height="200" stroke="${data.shapeColor}" fill="${data.shapeColor}" stroke-width="1" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoChars}</text>
            </svg>`;
            break;
            
    }
    return output
}

module.exports = createShape