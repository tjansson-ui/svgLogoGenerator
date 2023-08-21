import fs from 'fs'
import inquirer from "inquirer"
import { questions } from "./lib/helpers.js"
import { generateLogo } from "./lib/logo.js"

//  Creates a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const logo = generateLogo(answers)
        //stores the new SVG file in the examples folder
        fs.writeFile("./exampleLogos/Logo.svg", logo, err => {
            if (err)
            {
                throw err
            }
            console.log("Logo.svg was saved")
            })
    })
    .catch(error => console.log(error))
}

// Function call to initialize app
init();
