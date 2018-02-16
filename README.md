# start-node

Simple starting point to create a Node.js API.

Includes:
 - A router with one route
 - Test stack with jest

## Steps done to create this project

No generator here, project created from scratch

 - Update your node version
Use [n](https://github.com/tj/n) (My choice by far over nvm)

 - Create a new folder and run ```npm init --yes```

 - ```npm i express```
 - Copy-paste the first code sample on [express github](https://github.com/expressjs/express)
 - Create a npm script in package.json: ```"start": "node server"```
 - Try it: ```npm start```

 - git init
 - Create .gitignore (Inspiration [here](https://github.com/github/gitignore/blob/master/Node.gitignore))

 - In dev, use [nodemon](https://github.com/remy/nodemon) to run your server

### Tests

 - Extract the 'app' logic of your server to scr/app.js
 - ```npm i jest supertest --save-dev```
 - Create a small test (./test/home.spec.js)
 - Run Jest: ```npx jest```
 - Add a proper npm script ```"test": "jest"```
 - Test it: ```npm t```

## ESLint

 - Install [all necessary dependencies](https://github.com/standard/eslint-config-standard) to use [Standard](https://standardjs.com/) in ESLint
 - Create your .eslintrc file
 - Run ```npx eslint . --ext .js```
 - Add a proper npm script ```"lint": "eslint . --ext .js"```
 - Test it: ```npm run lint```