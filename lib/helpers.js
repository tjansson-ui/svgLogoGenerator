// Creates an array of question objects for user input
export const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Set a 3 character entry',
        validate: (entry) => {
              if (entry.length > 3) {
                // Pass the return value in the done callback
                return 'You can only provide up to 3 characters.';
              };
              return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color as hexadecimal or color',
        default: 'lightgreen',
    }, 
    {
        type: "list",
        name: "shape",
        message: "Choose a shape",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color as hexadecimal or color',
        default: 'black',
    }]; //questions for the inquirer prompt
