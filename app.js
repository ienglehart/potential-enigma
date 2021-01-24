const inquirer = require('inquirer');
const fs = require('fs');
// init function

function init() {
    //prompts for readme info
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
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
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Proveide intallation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'credit contributors here',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests used here',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Questions??????????',
        }
    ])

    //save given data to a json document
    .then(function(data) {
        const filename =
          data.name
            .toLowerCase()
            .split(' ')
            .join('') + '.json';
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
          if (err) {
            return console.log(err);
          }
    
          console.log('Success!');
        });
    });

    
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('readme.md', generatePage(fileName, data), err => {
        if (err) throw err;
      
        console.log('thats a start at least');
      });
}


// function call to initialize program
init();
