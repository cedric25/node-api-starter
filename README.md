# node-starter

Simple starting point to create a Node.js API with express.

Includes:
 - Two endpoints: `/` (GET + POST)
 - Test stack with [jest](https://facebook.github.io/jest/)
 - [Prettier](https://prettier.io/)
 - Logs with [bunyan](https://github.com/trentm/node-bunyan)
 - Access logs with [morgan](https://github.com/expressjs/morgan)

## How to use

 - Clone this project
```
git clone https://github.com/cedric25/node-api-starter.git my-api
cd my-api
nvm use
npm i
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
npm start
npm run start:debug
```

 - Run tests
```
npm t
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

### Git

 - git init
 - Create .gitignore (Inspiration [here](https://github.com/github/gitignore/blob/master/Node.gitignore))

### Tests

 - Extract the 'app' logic of your server to scr/app.js
 - `npm i jest supertest --save-dev`
 - Create a small test (./test/home.spec.js)
 - Add a proper npm script: `"test": "jest"`
 - Test it: `npm t`

### Prettier

 - Install [Prettier](https://github.com/prettier/prettier)
 - Create your .prettierrc file
 - Add two npm script `"lint": "prettier src --check"` and `"lint:fix": "prettier src --write"`
 - Test it: `npm run lint`

### Logs (bunyan)

 - `npm i bunyan`
 - Create the config you wish such as in `src/logger.js`
 - Create a npm script that uses bunyan CLI (Makes logs more readable in dev)

### Access logs (morgan)

 - `npm i morgan`
 - Use it in the express server: `app.use(morgan('tiny'))`
