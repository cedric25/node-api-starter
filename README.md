# node-starter

Simple starting point to create a Node.js API with express.

Includes:
 - Two endpoints: `/` (GET + POST)
 - Test stack with [jest](https://facebook.github.io/jest/)
 - ESLint with [standard](https://standardjs.com/)
 - Logs with [bunyan](https://github.com/trentm/node-bunyan)
 - Access logs with [morgan](https://github.com/expressjs/morgan)

## How to use

 - Clone this project
```
git clone https://github.com/cedric25/node-api-starter.git
mv node-api-starter my-api
cd my-api
npm i // yarn
```

 - Remove git history and create your own:
```
rm -rf .git
git init
git add .
git commit -m ":zap: Init project"
```

 - Run server
```
npm start // yarn start
npm run start:debug // yarn start:debug
```

 - Run tests
```
npm t // yarn test
```

## Steps done to create this project

### App

 - Check your node version: `n latest` (Using [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm))
 - Create a new folder and run `npm init --yes`
 - `npm i express`
 - Copy-paste the first code sample from express '[Getting Started](http://expressjs.com/en/starter/hello-world.html)'
 - Create a npm script in package.json: `"start": "node server"`
 - Try it: `npm start`
 - In dev, you can use [nodemon](https://github.com/remy/nodemon) to run your server
 - Add [body-parser](https://github.com/expressjs/body-parser) middleware and create a POST endpoint

### Git

 - git init
 - Create .gitignore (Inspiration [here](https://github.com/github/gitignore/blob/master/Node.gitignore))

### Tests

 - Extract the 'app' logic of your server to scr/app.js
 - `npm i jest supertest --save-dev`
 - Create a small test (./test/home.spec.js)
 - Add a proper npm script: `"test": "jest"`
 - Test it: `npm t`

### ESLint

 - Install [all necessary dependencies](https://github.com/standard/eslint-config-standard) to use [Standard](https://standardjs.com/) through ESLint
 - Create your .eslintrc file
 - Add a proper npm script `"lint": "eslint . --ext .js"`
 - Test it: `npm run lint`

### Logs (bunyan)

 - `npm i bunyan`
 - Create the config you wish such as in `src/logger.js`
 - Create a npm script that uses bunyan CLI (Makes logs more readable in dev)

### Access logs (morgan)

 - `npm i morgan`
 - Use it in the express server: `app.use(morgan('tiny'))`

### editorconfig

 - Add a quick editorconfig to maintain common formatting rules across team members
