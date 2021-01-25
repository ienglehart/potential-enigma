const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

const promptReadMe = readMeData => {
  console.log(`
==========================
Starting ReadMe Generation
==========================
`);
  //prompts for readme info
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
          validate: name => {
            if (name) {
              return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
          validate: description => {
            if (description) {
              return true;
            } else {
                console.log('You need to enter a description!');
                return false;
            }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Proveide intallation instructions',
          validate: installation => {
            if (installation) {
              return true;
            } else {
                console.log('You need to enter installation insructions!');
                return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions',
         validate: usage => {
          if (usage) {
            return true;
          } else {
              console.log('You need to enter usage instructions!');
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'credit contributors here',
          validate: credits => {
            if (credits) {
              return true;
            } else {
                console.log('You need to credit some contributors!');
                return false;
            }
          }
      }
    ])
};

// function call to initialize program
promptReadMe()
  .then(readMeData => {
    return generateMarkdown(readMeData);
  })
  .then(generateMarkdownResponse => {
    console.log(generateMarkdownResponse);
  })
;
