// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generatedREADME = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile)
// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub Username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the app (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter what your project is!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'how',
            message: 'How will someone use this? (Required)',
            validate: howInput => {
                if (howInput) {
                    return true;
                } else {
                    console.log('Please enter what your project is!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions. (Required)',
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                } else {
                    console.log('Please enter your use instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license will you use for your project?',
            choices: ['agpl', 'apache', 'mit', 'no license']
        },
        {
            type: 'confirm',
            name: 'confirmContributers',
            message: 'Would you like to allow other developers to contribute?',
            default: true
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please provide guidelines for contributing. (Required)',
            when: ({ confirmContributers }) => {
                if (confirmContributers) {
                    return true;
                } else {
                    return false;

                }
            },
            validate: contributerInput => {
                if (contributerInput) {
                    return true;
                } else {
                    console.log('Please enter contributer guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What should I do if I have an issue?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide instructions on how to test the app. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your use test instructions!');
                    return false;
                }
            }
        }
    ]);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await questions();
        const generateContent = generatedREADME(answers);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Readme successfully created')
    } catch (err) {
        console.log(err)
    }
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, error => {
//         if (error) {
//             return console.log('Sorry there was an error : ' + error);
//         }
//     })
// }
// const createReadMe = util.promisify(writeToFile);
// // TODO: Create a function to initialize app
// async function init() {
//     try {
//         const userAnswers = await inquirer.prompt(questions);
//         console.log('Thank you! The current data is being processed into your README.md: ', userAnswers);

//         const myMarkdown = generateMarkdown(userAnswers);
//         console.log(myMarkdown);

//         await createReadMe('README1.md', myMarkdown);

//     } catch (error) {
//         console.log('Sorry there was an error.' + error);
//     }
// };


// Function call to initialize app
init();
