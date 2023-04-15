const fs = require('fs');
const inquirer = require('inquirer');
const createShape = require('./lib/shapes')

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
        choices: [`circle`, `triangle`, `square`]
    },
    {
        type: 'input',
        message: 'Enter a color fo the shape (name or hex number).',
        name: 'shapeColor',
    },
]

const createLogo = function(parameters) {
    const shapeOutput = createShape(parameters)
    fs.writeFile('logo.svg', shapeOutput, (err) => err ? console.error(err) : console.log('Your logo is ready! Check the root folder for the new file.'))
}

const init = function () {
    inquirer.prompt(questions)
        .then((responses) => createLogo(responses))
}

init()