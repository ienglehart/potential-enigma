// array of questions for user
const inquirer = require('inquirer');


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
            type: 'list',
            name: 'description',
            message: 'Provide a short description of your project.',
            choices: 'A, B, C, D'
        },
        {
            //just add the rest of the questions here
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

// function to initialize program
//function init() {
    
//}

// function call to initialize program
init();
