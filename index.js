const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('/./lib/shapes')

const questions = [
    {
        type: 'input',
        message: `Enter the text you'd like on your logo (three chars max).`,
        name: 'logoChars',
    },
    {
        type: 'input',
        message: 'Enter a text color (name or hex number).',
        name: 'textColor',
    },
    {
        type: 'list',
        message: `Choose the shape you'd like for your logo.`,
        name: 'logoShape',
        choices: [`Circle`, `Triangle`, `Square`]
    },
    {
        type: 'input',
        message: 'Enter a color fo the shape (name or hex number).',
        name: 'shapeColor',
    },
]

// const createLogo(data) {
    // create a variable that is the data from the generate logo file (logoData(data))
    // fs.writeFile('logo.svg', logoData, (err) => 
    // err? console.error(err) " console.log('Your logo is ready! Check the root folder for the new file.")
//     )
// }

const init = function () {
    inquirer.prompt(questions)
//         .then(data) =>
// createFile(data)

}

init()