# node-starter

Simple starting point to create a Node.js API with express.

Includes:
 - Two endpoints: `/` (GET + POST)
 - Test stack with [jest](https://facebook.github.io/jest/)
 - [Prettier](https://prettier.io/)
 - Logs with [pino](https://github.com/pinojs/pino)
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
or  
npm run dev  
or  
npm run dev:debug
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

#### Unit

 - Extract the 'app' logic of your server to `src/app.js`
 - Create a small test (`./src/utils/utils.spec.js`)
 - Add convenient npm script (See `"test:unit"` in `package.json`)
 - Test it: `npm run test:unit`

#### Integration

 - `npm i jest supertest --save-dev`
 - Create a small test (`./src/app.test.js`)
 - Add convenient npm scripts (See `"test:int"` and `"test"` in `package.json`)
 - Test it: `npm run test:int`

### Prettier

 - Install [Prettier](https://github.com/prettier/prettier)
 - Create your `.prettierrc` file
 - Add two npm scripts `"prettier": "prettier src --check"` and `"prettier:fix": "prettier src --write"`
 - Test it: `npm run prettier`

### ESLint

 - Install [ESLint](https://github.com/eslint/eslint)
 - Init a config file: `npm init @eslint/config`
 - Tell ESLint about Jest: `npm i eslint-plugin-jest -D` and use it for test files (See `overrides` section in `.eslintrc.cjs`)
 - Add two npm scripts `"eslint"` and `"eslint:fix"`
 - Test it: `npm run eslint`

### Logs (pino)

 - `npm i pino`
 - `npm i pino-pretty -D`
 - Create the config you wish such as in `src/logger.js`

### Access logs (morgan)

 - `npm i morgan`
 - Use it in the express server: `app.use(morgan('tiny'))`

### dotenv

 - Use [dotenv](https://github.com/motdotla/dotenv) with the `.env` file to set your environment variables for your local environment.
