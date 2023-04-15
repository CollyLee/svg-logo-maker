// GLOBAL VARIABLES/REQUIRES
const fs = require('fs');
const inquirer = require('inquirer');
const createShape = require('./lib/createShape')
const maxLengthPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', maxLengthPrompt)

// INQUIRER PROMPTS
const questions = [
    {
        type: 'maxlength-input',
        message: "Enter the text you'd like on your logo (three chars max).",
        name: 'logoChars',
        maxLength: 3
    },
    {
        type: 'input',
        message: 'Enter a text color (name or hex number).',
        name: 'textColor',
    },
    {
        type: 'list',
        message: "Choose the shape you'd like for your logo.",
        name: 'logoShape',
        choices: [`Circle`, `Triangle`, `Square`]
    },
    {
        type: 'input',
        message: 'Enter a color of the shape (name or hex number).',
        name: 'shapeColor',
    },
    {
        type: 'input',
        message: "Enter a color of the shape's border (name or hex number).",
        name: 'shapeBorder',
    },
]


// FUNCTION THAT GATHERS USER RESPONSE AND SENDS TO CREATELOGO
const init = () => {
    inquirer.prompt(questions)
    // .then((data) => console.log(data))
        .then((data) => createLogo(data))
}


// FUNCTION THAT CALLS THE CREATESHAPE FUNCTION AND WRITES FILE
const createLogo = (data) => {
    // console.log(data);
    const shapeOutput = createShape(data);
    console.log(shapeOutput)
    
    fs.writeFile('logo.svg', String(shapeOutput), (err) => 
        err ? console.error(err) : console.log('Your logo is ready! Check the root folder for the new file.'))
}


init()