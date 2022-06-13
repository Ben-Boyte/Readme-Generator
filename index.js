const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your repository?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter a repository.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'Give your repository a description',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter a description.');
      return false;
    }
  }
  },
{
  type: 'confirm',
  name: 'confirmInstallation',
  message: 'Is there an installation?'
  },
{
  type: 'input',
  name: 'installation',
  message: 'Please list installation instructions.',
  when: ({ confirmInstallation }) => {
    if (confirmInstallation) {
      return true;
    } else {
      return false;
    }
  }
},

{
  type: 'confirm',
  name: 'confirmUsage',
  message: 'Do you want to give an instruction on how to use your application?'
},
{
  type: 'input',
  name: 'instructions',
  message: 'Please list instructions.',
  when: ({ confirmUsage }) => {
    if (confirmUsage) {
      return true;
    } else {
      return false;
    }
  }
},

{
  type: 'confirm',
  name: 'testConfirm',
  message: 'Is testing available?'
},
{
  type: 'input',
  name: 'testing',
  message: 'Please explain how your application can be tested.',
  when: ({ testConfirm }) => {
    if (testConfirm) {
      return true;
    } else {
      return false;
    }
  }
},
{ 
  type: 'list',
  name: 'license',
  message: 'Please choose a license.',
  choices: ['GNU AGPLv3', 'GNU GPLv3',
    'GNU LGPLv3', 'Mozilla Public License 2.0',
    'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense'],
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please select a license.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'username',
  message: 'What is your GitHub username?',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter GitHub username.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your email.');
      return false;
    }
  }
}];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log('Sorry there was an error : ' + error);
    }
  })
}


const generateReadMe = util.promisify(writeToFile);

async function program() {
  try {
    const input = await inquirer.prompt(questions);
    console.log('Thank you! The info is being made into a README file!', input);
    const readme = generateMarkdown(input);
    console.log(readme);
    await generateReadMe('README.md', readme);
    
  } catch (error) {
    console.log('Error.' + error);
  }
};
program();