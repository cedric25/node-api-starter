# node-starter

Simple starting point to create a Node.js API.

Includes:
 - One endpoint: ```/```
 - Test stack with jest
 - ESLint with standard

## Steps done to create this project

No generator here, project created from scratch

### App

 - Update your node version: ```n latest``` (Using [n](https://github.com/tj/n)
 - Create a new folder and run ```npm init --yes```
 - ```npm i express```
 - Copy-paste the first code sample on [express github](https://github.com/expressjs/express)
 - Create a npm script in package.json: ```"start": "node server"```
 - Try it: ```npm start```
 - In dev, use [nodemon](https://github.com/remy/nodemon) to run your server

### Git

 - git init
 - Create .gitignore (Inspiration [here](https://github.com/github/gitignore/blob/master/Node.gitignore))

### Tests

 - Extract the 'app' logic of your server to scr/app.js
 - ```npm i jest supertest --save-dev```
 - Create a small test (./test/home.spec.js)
 - Add a proper npm script: ```"test": "jest"```
 - Test it: ```npm t```

## ESLint

 - Install [all necessary dependencies](https://github.com/standard/eslint-config-standard) to use [Standard](https://standardjs.com/) through ESLint
 - Create your .eslintrc file
 - Add a proper npm script ```"lint": "eslint . --ext .js"```
 - Test it: ```npm run lint```

## editorconfig

 - Add a quick editorconfig to maintain to common formatting rules across team members
